"""Backend API tests for LearnWithVijayshree appointments."""
import os
import time
import pytest
import requests
from pathlib import Path
from dotenv import load_dotenv

# Load frontend .env to get the public backend URL used by the client
load_dotenv(Path("/app/frontend/.env"))

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
assert BASE_URL, "REACT_APP_BACKEND_URL must be set"

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Root / health ---
class TestRoot:
    def test_root(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data


# --- Appointments feature ---
class TestAppointmentsCreate:
    def test_create_appointment_valid(self, api_client):
        payload = {
            "name": "TEST_John Doe",
            "email": "test_john@example.com",
            "phone": "+15551234567",
            "message": "TEST_ 7th grade Algebra help needed.",
        }
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["message"] == payload["message"]
        assert data.get("status") == "pending"
        # store id for later
        pytest.created_appointment_id = data["id"]

    def test_get_appointments_contains_created(self, api_client):
        # small wait for eventual consistency (not typically needed)
        time.sleep(0.5)
        r = api_client.get(f"{API}/appointments")
        assert r.status_code == 200, r.text
        data = r.json()
        assert isinstance(data, list)
        ids = [a.get("id") for a in data]
        created_id = getattr(pytest, "created_appointment_id", None)
        assert created_id is not None, "Create test did not run"
        assert created_id in ids, f"Newly created appointment {created_id} not in GET list"

        # validate object structure
        created = next(a for a in data if a["id"] == created_id)
        assert created["email"] == "test_john@example.com"
        assert created["name"] == "TEST_John Doe"
        # _id from Mongo should NOT be exposed
        assert "_id" not in created

    def test_create_invalid_email_rejected(self, api_client):
        payload = {
            "name": "TEST_Bad Email",
            "email": "not-an-email",
            "phone": "+15551234567",
            "message": "Test invalid email",
        }
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 422, f"Expected 422 got {r.status_code}: {r.text}"

    def test_create_missing_fields_rejected(self, api_client):
        payload = {"name": "TEST_Only Name"}
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 422

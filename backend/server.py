from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class AppointmentCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str

class Appointment(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "pending"

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "LearnWithVijayshree API"}

@api_router.options("/appointments")
async def appointments_options():
    """Handle OPTIONS preflight request for appointments endpoint"""
    return {"message": "OK"}

@api_router.post("/appointments", response_model=Appointment)
async def create_appointment(input: AppointmentCreate):
    """Create a new appointment for free demo class"""
    try:
        appointment_dict = input.model_dump()
        appointment_obj = Appointment(**appointment_dict)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = appointment_obj.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        
        _ = await db.appointments.insert_one(doc)
        return appointment_obj
    except Exception as e:
        logger.error(f"Error creating appointment: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create appointment")

@api_router.get("/appointments", response_model=List[Appointment])
async def get_appointments():
    """Get all appointments"""
    try:
        # Exclude MongoDB's _id field from the query results
        appointments = await db.appointments.find({}, {"_id": 0}).to_list(1000)
        
        # Convert ISO string timestamps back to datetime objects
        for appt in appointments:
            if isinstance(appt['created_at'], str):
                appt['created_at'] = datetime.fromisoformat(appt['created_at'])
        
        return appointments
    except Exception as e:
        logger.error(f"Error fetching appointments: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch appointments")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
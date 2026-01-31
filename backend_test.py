#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime

class LearnWithVijayshreeAPITester:
    def __init__(self, base_url="https://vijayshree-edu.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
        
        result = {
            "test_name": name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        status = "✅ PASSED" if success else "❌ FAILED"
        print(f"{status} - {name}")
        if details:
            print(f"   Details: {details}")

    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            success = response.status_code == 200
            
            if success:
                data = response.json()
                expected_message = "LearnWithVijayshree API"
                if data.get("message") == expected_message:
                    self.log_test("API Root Endpoint", True, f"Status: {response.status_code}, Message: {data.get('message')}")
                else:
                    self.log_test("API Root Endpoint", False, f"Unexpected message: {data.get('message')}")
            else:
                self.log_test("API Root Endpoint", False, f"Status: {response.status_code}")
                
        except Exception as e:
            self.log_test("API Root Endpoint", False, f"Exception: {str(e)}")

    def test_create_appointment(self):
        """Test appointment creation"""
        test_data = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "(555) 123-4567",
            "message": "My child is in 7th grade and needs help with Algebra and Science. Looking for 1-on-1 tutoring sessions."
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/appointments",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            success = response.status_code == 200
            
            if success:
                data = response.json()
                # Check if response has expected fields
                required_fields = ['id', 'name', 'email', 'phone', 'message', 'created_at', 'status']
                missing_fields = [field for field in required_fields if field not in data]
                
                if not missing_fields:
                    self.log_test("Create Appointment", True, f"Appointment created with ID: {data.get('id')}")
                    return data.get('id')  # Return ID for further tests
                else:
                    self.log_test("Create Appointment", False, f"Missing fields in response: {missing_fields}")
            else:
                try:
                    error_data = response.json()
                    self.log_test("Create Appointment", False, f"Status: {response.status_code}, Error: {error_data}")
                except:
                    self.log_test("Create Appointment", False, f"Status: {response.status_code}, Response: {response.text}")
                    
        except Exception as e:
            self.log_test("Create Appointment", False, f"Exception: {str(e)}")
        
        return None

    def test_get_appointments(self):
        """Test retrieving appointments"""
        try:
            response = requests.get(f"{self.api_url}/appointments", timeout=10)
            success = response.status_code == 200
            
            if success:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Get Appointments", True, f"Retrieved {len(data)} appointments")
                    return data
                else:
                    self.log_test("Get Appointments", False, f"Expected list, got: {type(data)}")
            else:
                try:
                    error_data = response.json()
                    self.log_test("Get Appointments", False, f"Status: {response.status_code}, Error: {error_data}")
                except:
                    self.log_test("Get Appointments", False, f"Status: {response.status_code}, Response: {response.text}")
                    
        except Exception as e:
            self.log_test("Get Appointments", False, f"Exception: {str(e)}")
        
        return None

    def test_appointment_validation(self):
        """Test appointment creation with invalid data"""
        # Test missing required fields
        invalid_data = {
            "name": "Test User",
            # Missing email, phone, message
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/appointments",
                json=invalid_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            # Should return 422 for validation error
            success = response.status_code == 422
            
            if success:
                self.log_test("Appointment Validation", True, f"Correctly rejected invalid data with status: {response.status_code}")
            else:
                self.log_test("Appointment Validation", False, f"Expected 422, got: {response.status_code}")
                
        except Exception as e:
            self.log_test("Appointment Validation", False, f"Exception: {str(e)}")

    def test_cors_headers(self):
        """Test CORS headers are present"""
        try:
            response = requests.options(f"{self.api_url}/appointments", timeout=10)
            
            cors_headers = [
                'Access-Control-Allow-Origin',
                'Access-Control-Allow-Methods',
                'Access-Control-Allow-Headers'
            ]
            
            present_headers = [header for header in cors_headers if header in response.headers]
            
            if len(present_headers) >= 1:  # At least one CORS header should be present
                self.log_test("CORS Headers", True, f"CORS headers present: {present_headers}")
            else:
                self.log_test("CORS Headers", False, f"No CORS headers found in response")
                
        except Exception as e:
            self.log_test("CORS Headers", False, f"Exception: {str(e)}")

    def run_all_tests(self):
        """Run all backend API tests"""
        print("🚀 Starting LearnWithVijayshree Backend API Tests")
        print(f"🔗 Testing API at: {self.api_url}")
        print("=" * 60)
        
        # Test API availability
        self.test_api_root()
        
        # Test appointment creation
        appointment_id = self.test_create_appointment()
        
        # Test appointment retrieval
        appointments = self.test_get_appointments()
        
        # Test validation
        self.test_appointment_validation()
        
        # Test CORS
        self.test_cors_headers()
        
        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Test Summary: {self.tests_passed}/{self.tests_run} tests passed")
        
        success_rate = (self.tests_passed / self.tests_run * 100) if self.tests_run > 0 else 0
        print(f"📈 Success Rate: {success_rate:.1f}%")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed! Backend API is working correctly.")
            return True
        else:
            print("⚠️  Some tests failed. Check the details above.")
            return False

def main():
    """Main test execution"""
    tester = LearnWithVijayshreeAPITester()
    success = tester.run_all_tests()
    
    # Save detailed results
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump({
            'summary': {
                'tests_run': tester.tests_run,
                'tests_passed': tester.tests_passed,
                'success_rate': (tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0,
                'timestamp': datetime.now().isoformat()
            },
            'test_results': tester.test_results
        }, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())
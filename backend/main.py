from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
import datetime

app = FastAPI()

# MongoDB Connection
client = AsyncIOMotorClient("your_mongodb_connection_string")
db = client.oceantide_db

class Lead(BaseModel):
    name: str
    email: EmailStr
    company: str
    message: str

@app.post("/api/leads")
async def capture_lead(lead: Lead):
    lead_data = lead.dict()
    lead_data["timestamp"] = datetime.datetime.utcnow()
    lead_data["status"] = "New" # Initial status for Phase 1 flow [cite: 55]
    
    result = await db.leads.insert_one(lead_data)
    if result.inserted_id:
        return {"status": "success", "message": "Lead captured for qualification"}
    raise HTTPException(status_code=500, detail="Failed to save lead")

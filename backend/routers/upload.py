from fastapi import APIRouter, UploadFile, File
import os
import shutil
from backend.agents import state
from services.extractor_service import extract_complaint_fields
from services.pdf_service import extract_text
from agents.graph import graph

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        text = extract_text(file_path)

    state = {
    "text": text,
    "complaint": {}
    }

    result = graph.invoke(state)

    return {
    "filename": file.filename,
    "complaint": result["complaint"]
    }
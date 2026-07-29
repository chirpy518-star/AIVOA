from services.extractor_service import extract_complaint_fields

def extract_fields(state):

    text = state["text"]

    complaint = extract_complaint_fields(text)

    state["complaint"] = complaint

    return state
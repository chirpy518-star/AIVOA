import re

def extract_complaint_fields(text: str):

    complaint = {
        "customer_name": "",
        "product_name": "",
        "batch_number": "",
        "complaint_type": "",
        "severity": "Unknown"
    }

    customer = re.search(r"Customer\s*Name\s*:\s*(.*)", text, re.IGNORECASE)
    if customer:
        complaint["customer_name"] = customer.group(1).strip()

    product = re.search(r"Product\s*:\s*(.*)", text, re.IGNORECASE)
    if product:
        complaint["product_name"] = product.group(1).strip()

    batch = re.search(r"Batch\s*Number\s*:\s*(.*)", text, re.IGNORECASE)
    if batch:
        complaint["batch_number"] = batch.group(1).strip()

    return complaint
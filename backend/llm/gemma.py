import os
import json

from dotenv import load_dotenv
from openai import OpenAI

from prompts.complaint_prompt import SYSTEM_PROMPT

load_dotenv()

client = OpenAI(
    api_key=os.getenv("HF_TOKEN"),
    base_url="https://router.huggingface.co/v1"
)


def gemma_extract(text: str):

    prompt = f"""
{SYSTEM_PROMPT}

Complaint:

{text}
"""

    response = client.chat.completions.create(
        model="google/gemma-2-9b-it",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": text
            }
        ],
        temperature=0
    )

    output = response.choices[0].message.content

    try:
        return json.loads(output)

    except Exception:
        return {
            "customer_name": "",
            "product_name": "",
            "batch_number": "",
            "complaint_type": "",
            "severity": "",
            "priority": ""
        }
from llm.gemma import gemma_extract


def extract_fields(state):

    text = state["text"]

    complaint = gemma_extract(text)

    state["complaint"] = complaint

    return state
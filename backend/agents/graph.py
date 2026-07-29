from langgraph.graph import StateGraph, END

from agents.state import ComplaintState

from agents.complaint_agent import extract_fields


builder = StateGraph(ComplaintState)

builder.add_node("extract_fields", extract_fields)

builder.set_entry_point("extract_fields")

builder.add_edge("extract_fields", END)

graph = builder.compile()
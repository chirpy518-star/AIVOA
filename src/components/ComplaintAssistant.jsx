import React from 'react';

export default function ComplaintAssistant({ suggestion }) {
  return (
    <aside className="assistant">
      <h3>Assistant</h3>
      <p>{suggestion ?? 'I can help you draft or refine your complaint.'}</p>
      <ul>
        <li>Tip: Provide dates and any relevant IDs.</li>
        <li>Tip: Attach evidence files if available.</li>
      </ul>
    </aside>
  );
}

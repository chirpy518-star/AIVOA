import React from 'react';
import ComplaintForm from '../components/ComplaintForm';
import ComplaintAssistant from '../components/ComplaintAssistant';
import '../styles/complaint.css';

export default function ComplaintPage() {
  return (
    <main className="complaint-page">
      <h1>Complaint</h1>
      <div className="complaint-grid">
        <div className="left">
          <ComplaintAssistant suggestion="Try to include order numbers or screenshots if available." />
        </div>
        <div className="right">
          <ComplaintForm />
        </div>
      </div>
    </main>
  );
}

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';
import UploadBox from './UploadBox';
import ProgressBar from './ProgressBar';
import { submitComplaint, setProgress } from '../features/complaint/complaintSlice';

export default function ComplaintForm() {
  const dispatch = useDispatch();
  const progress = useSelector((s) => s.complaint.progress);
  const [form, setForm] = useState({
    name: '',
    email: '',
    category: '',
    details: '',
    file: null,
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onFileChange(file) {
    setForm((f) => ({ ...f, file }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // simple progress animation
    dispatch(setProgress(30));
    setTimeout(() => dispatch(setProgress(70)), 300);
    setTimeout(() => {
      dispatch(submitComplaint(form));
      dispatch(setProgress(100));
      setTimeout(() => dispatch(setProgress(0)), 800);
      setForm({ name: '', email: '', category: '', details: '', file: null });
    }, 800);
  }

  return (
    <form className="complaint-form" onSubmit={onSubmit}>
      <FormInput label="Your name" name="name" value={form.name} onChange={onChange} />
      <FormInput label="Email" name="email" value={form.email} onChange={onChange} />
      <FormSelect
        label="Category"
        name="category"
        value={form.category}
        onChange={onChange}
        options={[
          { value: 'billing', label: 'Billing' },
          { value: 'service', label: 'Service' },
          { value: 'other', label: 'Other' },
        ]}
      />
      <FormTextarea
        label="Details"
        name="details"
        value={form.details}
        onChange={onChange}
        placeholder="Describe the issue..."
      />
      <UploadBox label="Attachment (optional)" onChange={onFileChange} />
      <div className="form-actions">
        <button type="submit">Submit Complaint</button>
      </div>
      <ProgressBar value={progress} />
    </form>
  );
}

import React from 'react';

export default function FormTextarea({ label, name, value, onChange, placeholder }) {
  return (
    <label className="form-textarea">
      <div className="label">{label}</div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="textarea"
        rows={5}
      />
    </label>
  );
}

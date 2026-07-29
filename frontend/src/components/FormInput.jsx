import React from 'react';

export default function FormInput({ label, name, value, onChange, placeholder }) {
  return (
    <label className="form-input">
      <div className="label">{label}</div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
      />
    </label>
  );
}

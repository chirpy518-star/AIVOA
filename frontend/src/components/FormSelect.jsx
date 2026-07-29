import React from 'react';

export default function FormSelect({ label, name, value, onChange, options = [] }) {
  return (
    <label className="form-select">
      <div className="label">{label}</div>
      <select name={name} value={value} onChange={onChange} className="select">
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value ?? opt} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </option>
        ))}
      </select>
    </label>
  );
}

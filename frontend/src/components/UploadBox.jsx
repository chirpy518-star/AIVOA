import React from 'react';

export default function UploadBox({ label = 'Attach file', onChange }) {
  return (
    <div className="upload-box">
      <div className="label">{label}</div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files && e.target.files[0];
          if (file && onChange) onChange(file);
        }}
      />
    </div>
  );
}

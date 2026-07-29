import React from 'react';

export default function ProgressBar({ value = 0 }) {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div className="progress-root">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${pct}%` }}
          aria-valuenow={pct}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <div className="progress-label">{pct}%</div>
    </div>
  );
}

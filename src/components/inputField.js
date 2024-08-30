import React from 'react';

const InputField = ({ value, onChange }) => (
  <div>
    <label>USD Amount:</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter USD amount"
      max="100000000"
      style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }}
    />
  </div>
);

export default InputField;

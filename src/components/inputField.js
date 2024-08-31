import React from 'react';
import './bitcoinPriceWidget.css'; 

const InputField = ({ value, onChange }) => {
  return (
    <input
      type="number"
      className="input-field"
      placeholder="Enter USD Amount"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
// PricingOptions.js
import React, { useState } from 'react';

const PricingOptions = ({ onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  }

  const handleSubmit = () => {
    onSubmit(selectedOption);
  }

  return (
    <div>
      <h2>Pricing Options</h2>
      <label htmlFor="options">Select an option:</label>
      <select id="options" onChange={handleOptionChange} value={selectedOption}>
        <option value="basic">Basic</option>
        <option value="standard">Standard</option>
        <option value="premium">Premium</option>
      </select>
      <button onClick={handleSubmit}>Submit Pricing</button>
    </div>
  );
}

export default PricingOptions;

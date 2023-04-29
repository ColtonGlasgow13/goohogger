import React, { useState } from 'react';
import './NumberWidget.css';
import '../common/SubmitButton.css';

const NumberWidget = ({ stat1, stat2, sumOfStats }) => {
  const [numberA, setNumberA] = useState(1);
  const [numberB, setNumberB] = useState(1);

  const handleNumberAChange = (value) => {
    const newNumberA = Math.max(1, parseInt(value, 10));
    if (newNumberA + numberB > sumOfStats) {
      setNumberA(sumOfStats - numberB);
    } else {
      setNumberA(newNumberA);
    }
  };

  const handleNumberBChange = (value) => {
    const newNumberB = Math.max(1, parseInt(value, 10));
    if (numberA + newNumberB > sumOfStats) {
      setNumberB(sumOfStats - numberA);
    } else {
      setNumberB(newNumberB);
    }
  };

  const handleSubmit = () => {
    // Handle submission logic here
  };

  return (
    <div className="number-widget">
      <p>Set the {stat1} and {stat2} of the monster! Their sum must equal {sumOfStats}.</p>
      <div className="number-inputs">
        <input
          type="number"
          className="number-input"
          min="1"
          value={numberA}
          onChange={(e) => handleNumberAChange(e.target.value)}
        />
        <input
          type="number"
          className="number-input"
          min="1"
          value={numberB}
          onChange={(e) => handleNumberBChange(e.target.value)}
        />
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NumberWidget;

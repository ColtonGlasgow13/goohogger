import React, { useState } from 'react';
import './NumberWidget.css';
import '../common/SubmitButton.css';
import { putMonsterData } from '../../API/API'

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
    const data = {
      [stat1]: numberA,
      [stat2]: numberB
    };

    const idToken = JSON.parse(sessionStorage.getItem('idToken'));
    putMonsterData(data, idToken);
  };

  return (
    <div className="number-widget">
      <p>Set the <strong>{stat1}</strong> and <strong>{stat2}</strong> of the monster! Their sum must equal {sumOfStats}.</p>
      <div className="number-inputs">
        <div className="input-container">
          <input
            id="stat1"
            type="number"
            className="number-input"
            min="1"
            value={numberA}
            onChange={(e) => handleNumberAChange(e.target.value)}
          />
          <label htmlFor="stat1" className="number-label">{stat1}</label>
        </div>
        <div className="input-container">
          <input
            id="stat2"
            type="number"
            className="number-input"
            min="1"
            value={numberB}
            onChange={(e) => handleNumberBChange(e.target.value)}
          />
          <label htmlFor="stat2" className="number-label">{stat2}</label>
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NumberWidget;

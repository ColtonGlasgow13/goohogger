// TypeMovementWidget.js
import React, { useState } from 'react';
import './TypeMovementWidget.css';
import '../common/SubmitButton.css';
import { putMonsterData } from '../../API/API';

const TypeMovementWidget = () => {
  const [monsterType, setMonsterType] = useState('');
  const [movementSpeed, setMovementSpeed] = useState(5);

  const handleTypeChange = (event) => {
    setMonsterType(event.target.value);
  };

  const handleSpeedChange = (event) => {
    setMovementSpeed(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
        type: monsterType,
        speed: movementSpeed
      };
  
    const idToken = JSON.parse(sessionStorage.getItem('idToken'));
    putMonsterData(data, idToken);
  };

  return (
    <div className="type-movement-widget">
      <h3>Select the type of the monster and set its movement speed:</h3>
      <select
        className="monster-type-select"
        value={monsterType}
        onChange={handleTypeChange}
      >
        <option value="">Select...</option>
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
        <option value="type3">Type 3</option>
        // Add more options as needed
      </select>
      <input
        className="movement-speed-input"
        type="number"
        min="5"
        step="5"
        value={movementSpeed}
        onChange={handleSpeedChange}
      />
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TypeMovementWidget;

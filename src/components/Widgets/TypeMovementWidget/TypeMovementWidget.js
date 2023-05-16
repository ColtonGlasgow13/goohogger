// TypeMovementWidget.js
import React from 'react';
import './TypeMovementWidget.css';
import '../../Common/SubmitButton.css';
import useForm from '../useForm';

const TypeMovementWidget = () => {
  const handleTypeChange = (event, state, setState) => {
    setState(prevState => ({ ...prevState, type: event.target.value }));
  };

  const handleSpeedChange = (event, state, setState) => {
    setState(prevState => ({ ...prevState, speed: parseInt(event.target.value, 10) }));
  };

  const formatData = state => (state);

  const { values, onChange, onSubmit } = useForm({type: '', speed: 5}, formatData);

  return (
    <div className="type-movement-widget" data-test-id="type-movement-widget">
      <h3>Select the type of the monster and set its movement speed:</h3>
      <select
        className="monster-type-select"
        name="type"
        value={values.type}
        onChange={(e) => onChange(e, handleTypeChange)}
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
        name="speed"
        value={values.speed}
        onChange={(e) => onChange(e, handleSpeedChange)}
      />
      <button className="submit-button" onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default TypeMovementWidget;

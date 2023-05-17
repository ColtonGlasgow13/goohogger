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
        <option value="aberration">Aberration</option>
        <option value="beast">Beast</option>
        <option value="celestial">Celestial</option>
        <option value="construct">Construct</option>
        <option value="dragon">Dragon</option>
        <option value="elemental">Elemental</option>
        <option value="fey">Fey</option>
        <option value="fiend">Fiend</option>
        <option value="giant">Giant</option>
        <option value="humanoid">Humanoid</option>
        <option value="monstrosity">Monstrosity</option>
        <option value="ooze">Ooze</option>
        <option value="plant">Plant</option>
        <option value="undead">Undead</option>

      </select>
      <div className='speed-container'>
        <input
          className="movement-speed-input"
          type="number"
          min="5"
          step="5"
          name="speed"
          value={values.speed}
          onChange={(e) => onChange(e, handleSpeedChange)}
        />
        <span className="unit">ft</span>
      </div>
      <button className="submit-button" onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default TypeMovementWidget;

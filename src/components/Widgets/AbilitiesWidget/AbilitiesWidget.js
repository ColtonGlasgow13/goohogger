// AbilitiesWidget.js
import React from 'react';
import './AbilitiesWidget.css';
import '../../Common/SubmitButton.css';
import useForm from '../useForm';

const AbilitiesWidget = () => {
  const formatData = (selectedAbilities) => ({
      abilities: Object.keys(selectedAbilities).filter(ability => selectedAbilities[ability] === true)
    });

  const handleAbilityChange = (event, state, setState) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { values, onChange, onSubmit } = useForm({ }, formatData);

  return (
    <div className="abilities-widget" data-test-id="abilities-widget">
      <h3>Select the abilities of the monster:</h3>
      <label>
        <input
          type="checkbox"
          name="ability1"
          checked={values.ability1 || false}
          onChange={(e) => onChange(e, handleAbilityChange)}
        />
        Ability 1
      </label>
      <label>
        <input
          type="checkbox"
          name="ability2"
          checked={values.ability2 || false}
          onChange={(e) => onChange(e, handleAbilityChange)}
        />
        Ability 2
      </label>
      <label>
        <input
          type="checkbox"
          name="ability3"
          checked={values.ability3 || false}
          onChange={(e) => onChange(e, handleAbilityChange)}
        />
        Ability 3
      </label>
      <button className="submit-button" onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default AbilitiesWidget;

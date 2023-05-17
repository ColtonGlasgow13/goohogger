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
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="spellcasting"
            checked={values.spellcasting || false}
            onChange={(e) => onChange(e, handleAbilityChange)}
          />
          Spellcasting
        </label>
        <label>
          <input
            type="checkbox"
            name="areaOfEffect"
            checked={values.areaOfEffect || false}
            onChange={(e) => onChange(e, handleAbilityChange)}
          />
          Area of Effect
        </label>
        <label>
          <input
            type="checkbox"
            name="hpReduction"
            checked={values.hpReduction || false}
            onChange={(e) => onChange(e, handleAbilityChange)}
          />
          HP Reduction
        </label>
        <label>
          <input
            type="checkbox"
            name="rangedAttacks"
            checked={values.rangedWeapons || false}
            onChange={(e) => onChange(e, handleAbilityChange)}
          />
          Ranged Attacks
        </label>
        <label>
          <input
            type="checkbox"
            name="reachAttacks"
            checked={values.reachAttacks || false}
            onChange={(e) => onChange(e, handleAbilityChange)}
          />
          Reach Attacks
        </label>
        <label>
          <input
            type="checkbox"
            name="recharge"
            checked={values.recharge || false}
            onChange={(e) => onChange(e, handleAbilityChange)}
          />
          Recharge
        </label>
        <label>
          <input
            type="checkbox"
            name="summonsAllies"
            checked={values.summonsAllies || false}
            onChange={(e) => onChange(e, handleAbilityChange)}
          />
          Summons Allies
        </label>
        <label>
          <input
            type="checkbox"
            name="legendary"
            checked={values.legendary || false}
            onChange={(e) => onChange(e, handleAbilityChange)}
          />
          Legendary
        </label>
        <label>
          <input
            type="checkbox"
            name="lairActions"
            checked={values.lairActions || false}
            onChange={(e) => onChange(e, handleAbilityChange)}
          />
          Lair Actions
        </label>
        <label>
          <input
            type="checkbox"
            name="reactions"
            checked={values.reactions || false}
            onChange={(e) => onChange(e, handleAbilityChange)}
          />
          Reactions
        </label>
      </div>
      <button className="submit-button" onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default AbilitiesWidget;

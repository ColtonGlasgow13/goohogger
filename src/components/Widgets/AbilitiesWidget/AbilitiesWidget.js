// AbilitiesWidget.js
import React, { useState } from 'react';
import './AbilitiesWidget.css';
import { putMonsterData } from '../../API/API';

const AbilitiesWidget = () => {
  const [selectedAbilities, setSelectedAbilities] = useState({});

  const handleAbilityChange = (event) => {
    setSelectedAbilities({
      ...selectedAbilities,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    const data = {
        abilities: Object.keys(selectedAbilities).filter(ability => selectedAbilities[ability] === true)
      };
  
    const idToken = JSON.parse(sessionStorage.getItem('idToken'));
    putMonsterData(data, idToken);
  };

  return (
    <div className="abilities-widget">
      <h3>Select the abilities of the monster:</h3>
      <label>
        <input
          type="checkbox"
          name="ability1"
          checked={selectedAbilities.ability1 || false}
          onChange={handleAbilityChange}
        />
        Ability 1
      </label>
      <label>
        <input
          type="checkbox"
          name="ability2"
          checked={selectedAbilities.ability2 || false}
          onChange={handleAbilityChange}
        />
        Ability 2
      </label>
      <label>
        <input
          type="checkbox"
          name="ability3"
          checked={selectedAbilities.ability3 || false}
          onChange={handleAbilityChange}
        />
        Ability 3
      </label>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AbilitiesWidget;

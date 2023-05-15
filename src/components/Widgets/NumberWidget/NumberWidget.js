import React from 'react';
import './NumberWidget.css';
import '../../common/SubmitButton.css';
import useFormInput from '../useForm';

const NumberWidget = ({ stat1, stat2, sumOfStats }) => {
  const initialStats = {
    [stat1]: 1,
    [stat2]: 1,
  };

  const handleInputChange = (event, currentStats, setStats) => {
    const { name, value: newValue } = event.target;
    const otherStat = name === stat1 ? stat2 : stat1;
    const newStatValue = Math.max(1, parseInt(newValue, 10));
    if (newStatValue + currentStats[otherStat] > sumOfStats) {
      setStats({ ...currentStats, [name]: sumOfStats - currentStats[otherStat] });
    } else {
      setStats({ ...currentStats, [name]: newStatValue });
    }
  };
  
  const formatData = (stats) => stats;

  const { value: stats, onChange: handleStatsChange, onSubmit: handleSubmit } = useFormInput(
    initialStats,
    handleInputChange,
    formatData
  );

  const isDisabled = stats[stat1] + stats[stat2] !== sumOfStats;

  return (
    <div className="number-widget">
      <p>
        Set the <strong>{stat1}</strong> and <strong>{stat2}</strong> of the monster! Their sum must equal {sumOfStats}.
      </p>
      <div className="number-inputs">
        <div className="input-container">
          <input
            id={stat1}
            type="number"
            className="number-input"
            min="1"
            name={stat1}
            value={stats[stat1]}
            onChange={handleStatsChange}
          />
          <label htmlFor={stat1} className="number-label">{stat1}</label>
        </div>
        <div className="input-container">
        <input
            id={stat2}
            type="number"
            className="number-input"
            min="1"
            name={stat2}
            value={stats[stat2]}
            onChange={handleStatsChange}
          />
          <label htmlFor={stat2} className="number-label">{stat2}</label>
        </div>
      </div>
      <button className={`submit-button ${isDisabled ? 'disabled-button' : ''}`} onClick={handleSubmit} disabled={isDisabled}>
        Submit
      </button>
    </div>
  );
};

export default NumberWidget;

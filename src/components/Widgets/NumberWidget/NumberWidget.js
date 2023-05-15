import React from 'react';
import './NumberWidget.css';
import '../../common/SubmitButton.css';
import useForm from '../useForm';

const NumberWidget = ({ stat1, stat2, sumOfStats }) => {
  const formatData = ({ numberA, numberB }) => ({
    [stat1]: numberA,
    [stat2]: numberB,
  });

  const { values, onChange, onSubmit } = useForm({ numberA: 1, numberB: 1 }, formatData);

  const handleNumberAChange = (event, state, setState) => {
    const newNumberA = Math.max(1, parseInt(event.target.value, 10));
    if (newNumberA + state.numberB > sumOfStats) {
      setState({ ...state, numberA: sumOfStats - state.numberB });
    } else {
      setState({ ...state, numberA: newNumberA });
    }
  };

  const handleNumberBChange = (event, state, setState) => {
    const newNumberB = Math.max(1, parseInt(event.target.value, 10));
    if (state.numberA + newNumberB > sumOfStats) {
      setState({ ...state, numberB: sumOfStats - state.numberA });
    } else {
      setState({ ...state, numberB: newNumberB });
    }
  };

  const isDisabled = values.numberA + values.numberB !== sumOfStats;

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
            value={values.numberA}
            onChange={(e) => onChange(e, handleNumberAChange)}
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
            value={values.numberB}
            onChange={(e) => onChange(e, handleNumberBChange)}
          />
          <label htmlFor={stat2} className="number-label">{stat2}</label>
        </div>
      </div>
      <button className={`submit-button ${isDisabled ? 'disabled-button' : ''}`} onClick={onSubmit} disabled={isDisabled}>
        Submit
      </button>
    </div>
  );
};

export default NumberWidget;

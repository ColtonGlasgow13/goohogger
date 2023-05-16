// TextInputWidget.js
import React from 'react';
import './TextInputWidget.css';
import '../../Common/SubmitButton.css';
import useForm from '../useForm';

const TextInputWidget = () => {
  const formatData = value => (value);

  const { values, onChange, onSubmit } = useForm({ name: '' }, formatData);

  return (
    <div className="text-input-widget" data-test-id="name-widget">
      <h3>What is the name of the monster?</h3>
      <input
        className="text-input"
        type="text"
        placeholder="Enter text here"
        value={values.name}
        name='name'
        onChange={event => onChange(event)}
      />
      <button className="submit-button" onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default TextInputWidget;
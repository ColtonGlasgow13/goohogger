// TextInputWidget.js
import React, { useState } from 'react';
import './TextInputWidget.css';
import '../../common/SubmitButton.css';
import { putMonsterData } from '../../API/API'

const TextInputWidget = () => {
  const initialText = '';

  const handleInputChange = (event, _, setValue) => {
    setValue(event.target.value);
  };

  const formatData = (text) => ({ name: text });

  const { value: text, onChange: handleNameChange, onSubmit: handleSubmit } = useFormInput(
    initialText,
    handleInputChange,
    formatData
  );


  return (
    <div className="text-input-widget">
      <h3>What is the name of the monster?</h3>
      <input
        className="text-input"
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={handleNameChange}
      />
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TextInputWidget;

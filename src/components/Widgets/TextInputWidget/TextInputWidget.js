// TextInputWidget.js
import React, { useState } from 'react';
import './TextInputWidget.css';
import '../../common/SubmitButton.css';
import { putMonsterData } from '../../API/API'

const TextInputWidget = () => {
  const [text, setText] = useState('')

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
      name: text
    };

    const idToken = JSON.parse(sessionStorage.getItem('idToken'));
    putMonsterData(data, idToken);
  };


  return (
    <div className="text-input-widget">
      <h3>What is the name of the monster?</h3>
      <input
        className="text-input"
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={handleInputChange}
      />
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TextInputWidget;

// TextInputWidget.js
import React from 'react';
import './TextInputWidget.css';

const TextInputWidget = () => {
  return (
    <div className="text-input-widget">
      <h3>What is the name of the monster?</h3>
      <input
        className="text-input"
        type="text"
        placeholder="Enter text here"
      />
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default TextInputWidget;

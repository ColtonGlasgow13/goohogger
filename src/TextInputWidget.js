import React, { useState } from 'react';
import './SubmitButton.css';     

const TextInputWidget = () => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    // Handle submission logic here
  };

  return (
    <div>
      <p>Enter some text:</p>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TextInputWidget;

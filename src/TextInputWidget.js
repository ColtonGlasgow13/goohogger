import React, { useState } from 'react';
import './SubmitButton.css';     

const TextInputWidget = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <p>Enter some text:</p>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

export default TextInputWidget;

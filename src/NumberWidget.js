import React, { useState } from 'react';

const NumberWidget = ({ targetNumber }) => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <div>
      <p>Select two numbers that add up to {targetNumber}:</p>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(parseInt(e.target.value, 10))}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(parseInt(e.target.value, 10))}
      />
    </div>
  );
};

export default NumberWidget;

import React from 'react';
import './InterfacePanel.css';
import UserButton from './UserButton';

const InterfacePanel = ({ title, buttons }) => {
  return (
    <div className="interface-panel">
      <h2>{title}</h2>
      <div className="button-container">
        {buttons.map((buttonLabel, index) => (
          <UserButton key={index} label={buttonLabel} />
        ))}
      </div>
    </div>
  );
};

export default InterfacePanel;

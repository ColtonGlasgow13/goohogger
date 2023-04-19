import React, { useState } from 'react';
import './InterfacePanel.css';
import UserButton from './UserButton';
import TextInputWidget from './TextInputWidget';
import NumberWidget from './NumberWidget';

const InterfacePanel = ({ title, buttons }) => {
    const [userName, setUserName] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
  
    const handleNameSubmit = (event) => {
      event.preventDefault();
      setSelectedUser(userName);
    };

    const renderWidget = () => {
        if (!selectedUser) {
          return null;
        }
    
        switch (selectedUser.toLowerCase()) {
          case 'user1':
            return <TextInputWidget />;
          case 'user2':
            return <NumberWidget targetNumber={10} />;
          default:
            return <p>Unknown user, please try again.</p>;
        }
      };
  
    return (
      <div className="interface-panel">
        <h2>{title}</h2>
        {!selectedUser && (
          <form onSubmit={handleNameSubmit}>
            <label htmlFor="userName">Choose your name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        )}
        {selectedUser && (
          <div className="button-container">
            {buttons.map((buttonLabel, index) => (
              <UserButton key={index} label={buttonLabel} />
            ))}
          </div>
        )}
        {renderWidget()}
      </div>
    );
  };
  
  export default InterfacePanel;

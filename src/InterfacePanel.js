import React, { useState, useEffect } from 'react';
import './InterfacePanel.css';
import TextInputWidget from './TextInputWidget';
import NumberWidget from './NumberWidget';
import './SubmitButton.css';
import './InterfacePanelForm.css'

const InterfacePanel = ({ title, buttons }) => {
    const [userName, setUserName] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [loginMessage, setLoginMessage] = useState(null)
  
    const handleNameSubmit = (event) => {
      event.preventDefault();
      setSelectedUser(userName);
    };

    useEffect(() => {
        if (selectedUser && !['user1', 'user2'].includes(selectedUser.toLowerCase())) {
          setSelectedUser(null);
          setLoginMessage('Unknown user, please try again.');
        }
      }, [selectedUser]);

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
            return null;
        }
      };
  
    return (
      <div className="interface-panel">
        {!selectedUser && (<h2>{title}</h2>)}
        {loginMessage && !selectedUser && (<h3>{loginMessage}</h3>)}
        {!selectedUser && (
          <form onSubmit={handleNameSubmit} className='interface-panel-form'>
            <input
              type="text"
              className="text-input"
              placeholder="Username"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button type="submit" className='submit-button'>Submit</button>
          </form>
        )}
        <div className="widget-container">{renderWidget()}</div>
      </div>
    );
  };
  
  export default InterfacePanel;

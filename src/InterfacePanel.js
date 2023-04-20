import React, { useState, useEffect } from 'react';
import './InterfacePanel.css';
import TextInputWidget from './TextInputWidget';
import NumberWidget from './NumberWidget';
import './SubmitButton.css';
import './InterfacePanelForm.css'
import SignInForm from './SignInForm';

const InterfacePanel = ({ title }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const clickCreateAccount = () => {
    
    }
  
    return (
      <div className="interface-panel">
        {!currentUser ? (
          <div>
            <SignInForm title={title} onSignIn={setCurrentUser} />
            <button id="or-create-account" onClick={clickCreateAccount}>Or create an account</button>
          </div>
        ) : (
          <div className="widget-container">I am a widget!</div>
        )}
      </div>
    );
  };
  
  export default InterfacePanel;

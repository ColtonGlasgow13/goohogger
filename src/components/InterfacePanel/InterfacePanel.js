import React, { useState, useEffect } from 'react';
import './InterfacePanel.css';
import TextInputWidget from '../TextInputWidget/TextInputWidget';
import NumberWidget from '../NumberWidget/NumberWidget';
import '../common/SubmitButton.css';
import './InterfacePanelForm.css'
import AuthForm from '../AuthForm/AuthForm';

const InterfacePanel = ({ title }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [showLogin, setShowLogin] = useState(true);

    const toggleAuthMode = () => {
      setShowLogin(!showLogin);
    };
  
    return (
      <div className="interface-panel">
        {!currentUser ? (
          <div className='form-container'>
            {showLogin ? (
              <AuthForm title="Who are you?" mode="signIn" onSignIn={setCurrentUser} />
            ) : (
              <AuthForm title="Join us." mode="signUp"/>
            )}
            <button id="toggle-auth" onClick={toggleAuthMode}>{showLogin ? "Or create an account" : "Or sign in"}</button>
          </div>
        ) : (
        <div className="widget-container">I am a widget!</div>
        )}
      </div>
    );
  };
  
  export default InterfacePanel;

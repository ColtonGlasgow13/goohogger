import React, { useState, useEffect } from 'react';
import './InterfacePanel.css';
import TextInputWidget from './TextInputWidget';
import NumberWidget from './NumberWidget';
import './SubmitButton.css';
import './InterfacePanelForm.css'
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const InterfacePanel = ({ title }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [showLogin, setShowLogin] = useState(true);
  
    return (
      <div className="interface-panel">
        {!currentUser ? (
          showLogin ? (
          <div className='form-container'>
            <SignInForm title={title} onSignIn={setCurrentUser} />
            <button id="or-create-account" onClick={() => setShowLogin(false)}>Or create an account</button>
          </div>
          ) : (
          <div className='form-container'>
            <SignUpForm title="Join us."/>
            <button id="or-create-account" onClick={() => setShowLogin(true)}>Or log in</button>
          </div>
          )
        ) : (
        <div className="widget-container">I am a widget!</div>
        )}
      </div>
    );
  };
  
  export default InterfacePanel;

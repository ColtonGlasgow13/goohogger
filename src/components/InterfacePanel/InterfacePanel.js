import React, { useState, useEffect } from 'react';
import './InterfacePanel.css';
import TextInputWidget from '../TextInputWidget/TextInputWidget';
import NumberWidget from '../NumberWidget/NumberWidget';
import '../common/SubmitButton.css';
import './InterfacePanelForm.css'
import AuthForm from '../AuthForm/AuthForm';

const InterfacePanel = ({ user, setUser, widgetName }) => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleAuthMode = () => {
      setShowLogin(!showLogin);
    };


    const renderWidget = () => {
      switch(widgetName) {
        case 'name':
          return <TextInputWidget/>;
        default:
          return <div>Uh oh! there's been a little fuckywucky with your server-side data (●´ω｀●) Maybe log out and back in?</div>
      }
    }

  
    return (
      <div className="interface-panel">
        {!user ? (
          <div className='form-container'>
            {showLogin ? (
              <AuthForm title="Who are you?" mode="signIn" onSignIn={setUser}/>
            ) : (
              <AuthForm title="Join us." mode="signUp"/>
            )}
            <button id="toggle-auth" onClick={toggleAuthMode}>{showLogin ? "Or create an account" : "Or sign in"}</button>
          </div>
        ) : (
        <div className="widget-container">
          {renderWidget()}
        </div>
        )}
      </div>
    );
  };
  
  export default InterfacePanel;

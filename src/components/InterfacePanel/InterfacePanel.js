import React, { useState } from 'react';
import './InterfacePanel.css';
import TextInputWidget from '../Widgets/TextInputWidget/TextInputWidget';
import NumberWidget from '../Widgets/NumberWidget/NumberWidget';
import TypeMovementWidget from '../Widgets/TypeMovementWidget/TypeMovementWidget'
import '../Common/SubmitButton.css';
import '../Common/SpinningImage.css';
import './InterfacePanelForm.css'
import AuthForm from '../AuthForm/AuthForm';
import AbilitiesWidget from '../Widgets/AbilitiesWidget/AbilitiesWidget';

const InterfacePanel = ({ user, setUser, widgetName, stat1, stat2 }) => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleAuthMode = () => {
      setShowLogin(!showLogin);
    };


    const handleSignIn = (user) => {
      setShowLogin(true);
      setUser(user);
    }


    const renderWidget = () => {
        switch(widgetName) {
          case 'name':
            return <TextInputWidget/>;
          case 'stats-1':
          case 'stats-2':
          case 'stats-3':
            return <NumberWidget stat1={stat1} stat2={stat2} sumOfStats={30}/>
          case 'type-movement':
            return <TypeMovementWidget/>;
          case 'abilities':
            return <AbilitiesWidget/>
          default:
            return <img src="goohogger-head-on.png" alt="Loading..." className="spinning-image" />
        }
      }

  
    return (
      <div className="interface-panel">
        {!user ? (
          <div className='form-container'>
            {showLogin ? (
              <AuthForm title="Who are you?" mode="signIn" onSignIn={handleSignIn}/>
            ) : (
              <AuthForm title="Join us." mode="signUp" onSignIn={handleSignIn}/>
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

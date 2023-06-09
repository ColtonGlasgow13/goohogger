import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import './components/Common/wordart.css'
import GoohoggerMain from './components/GoohoggerMain/GoohoggerMain';
import InterfacePanel from './components/InterfacePanel/InterfacePanel';
import Music from './components/Common/Music.js';
import { auth } from './components/Common/firebase';
import { assignUserToMonster, getUserAssignedWidget, isUserAssignedToMonster } from './components/API/API.js';

function App() {
  const [user, setUser] = useState(null);
  const [widgetName, setWidgetName] = useState(null);
  const [stat1, setStat1] = useState(null);
  const [stat2, setStat2] = useState(null);

  const storeToken = async (user) => {
    if (user) {
      const uid = user.uid;
      const idToken = await user.getIdToken();
      sessionStorage.setItem('idToken', JSON.stringify(idToken));
      sessionStorage.setItem('uid', JSON.stringify(uid));

      console.log('Stored UID:', uid)
    } else {
      console.error('No user is currently signed in');
    }
  };

  const removeToken = async () => {
    sessionStorage.removeItem('idToken');
    sessionStorage.removeItem('uid');
  }


  const userSignIn = useCallback(async (user) => {
    setUser(user);
    await storeToken(user);
    console.log('token stored');

    const idToken = JSON.parse(sessionStorage.getItem('idToken'));
    const uid = JSON.parse(sessionStorage.getItem('uid'));
    
    // Assign the user to a monster if they haven't been already
    if (!(await isUserAssignedToMonster(uid, idToken))) {
      await assignUserToMonster(uid, idToken);
    }

    // Record the user's assigned widget in state
    const { widgetName, statsDetails } = await getUserAssignedWidget(uid, idToken);
    setWidgetName(widgetName);
    if (statsDetails) {
      setStat1(statsDetails[0]);
      setStat2(statsDetails[1]);
    }
  }, []);

  const userSignOut = useCallback(() => {
    setUser(null);
    removeToken();
  }, []);
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        userSignIn(user);
      } else {
        userSignOut();
      }
    });
  
    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, [userSignIn, userSignOut]);

  const clickTitle = async() => {
    // const { uid, idToken } = await getCurrentUserToken();
    // console.log("User UID:", uid);
    // console.log("User ID Token:", idToken);
    // isUserAssignedToMonster(uid, idToken);

    // auth.signOut().then(() => {
    //   // Sign-out successful.
    //   console.log("User signed out successfully.");
    // }).catch((error) => {
    //   // An error happened.
    //   console.error("Error signing out:", error);
    console.log("ouch");
  }

  return (
    <div id="app">
    <header>
      <h1 id='main-title' className="wordart rainbow" onClick={clickTitle}><span className="text">Goohogger.com</span></h1>
      {user && (
        <button id='logout-button'
          onClick={() => {
            auth.signOut().then(() => {
              // Sign-out successful.
              console.log("User signed out successfully.");
            }).catch((error) => {
              // An error happened.
              console.error("Error signing out:", error);
            });
          }}
        >
          Logout
        </button>
      )}
    </header>
    <main>
      <GoohoggerMain></GoohoggerMain>
      <InterfacePanel 
        title="Who are you?" 
        user={user} 
        setUser={setUser} 
        widgetName={widgetName}
        stat1={stat1}
        stat2={stat2} />
      <GoohoggerMain></GoohoggerMain>
    </main>
    <footer>
      <p>Footer content</p>
      <Music></Music>
    </footer>
  </div>
  );

}

export default App;

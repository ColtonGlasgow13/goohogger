import React, { useState, useEffect } from 'react';
import './App.css';
import './components/common/wordart.css'
import GoohoggerMain from './components/GoohoggerMain/GoohoggerMain';
import InterfacePanel from './components/InterfacePanel/InterfacePanel';
import Music from './components/common/Music.js';
import { auth } from './components/common/firebase';
import { checkUserExists } from './components/API/API.js';
import { getCurrentUserToken } from './components/common/firebase';

function App() {
  const [user, setUser] = useState(null);

  const storeToken = async () => {
    const { uid, userToken } = await getCurrentUserToken();
    if (userToken) {
      sessionStorage.setItem('userToken', JSON.stringify(userToken));
      sessionStorage.setItem('uid', JSON.stringify(uid));
    }
  };

  const removeToken = async () => {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('uid');
  }
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
        storeToken();
      } else {
        // User is signed out
        setUser(null);
        removeToken();
      }
    });
  
    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  const clickTitle = async() => {
    // const { uid, idToken } = await getCurrentUserToken();
    // console.log("User UID:", uid);
    // console.log("User ID Token:", idToken);
    // checkUserExists(uid, idToken);

    // auth.signOut().then(() => {
    //   // Sign-out successful.
    //   console.log("User signed out successfully.");
    // }).catch((error) => {
    //   // An error happened.
    //   console.error("Error signing out:", error);
    console.log("fuck");
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
      <InterfacePanel title="Who are you?" user={user} setUser={setUser} />
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

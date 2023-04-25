import React, { useState, useEffect } from 'react';
import './App.css';
import './wordart.css'
import GoohoggerMain from './GoohoggerMain.js';
import InterfacePanel from './InterfacePanel';
import Music from './Music.js';
import { auth } from './firebase';
import { checkUserExists } from './API.js';
import { getCurrentUserToken } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  
    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  const clickTitle = async() => {
    const { uid, idToken } = await getCurrentUserToken();
    console.log("User UID:", uid);
    console.log("User ID Token:", idToken);
    checkUserExists(uid, idToken);

    // auth.signOut().then(() => {
    //   // Sign-out successful.
    //   console.log("User signed out successfully.");
    // }).catch((error) => {
    //   // An error happened.
    //   console.error("Error signing out:", error);
    // });
  }

  return (
    <div id="app">
    <header>
      <h1 class="wordart rainbow" onClick={clickTitle}><span class="text">Goohogger.com</span></h1>
    </header>
    <main>
      <GoohoggerMain></GoohoggerMain>
      <InterfacePanel title="Who are you?" />
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

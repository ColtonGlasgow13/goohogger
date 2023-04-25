import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import "firebase/firestore";

const firebaseConfig = {
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_URL,
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "goohogger.firebaseapp.com",
  projectId: "goohogger",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = firebase.initializeApp(firebaseConfig);

const storage = getStorage(app);

const auth = app.auth();

const getCurrentUserToken = async () => {
  const user = firebase.auth().currentUser;
  
  if (user) {
    const uid = user.uid;
    const idToken = await user.getIdToken();
    return { uid, idToken };
  } else {
    console.error('No user is currently signed in');
    return null;
  }
};

export { storage, auth, getCurrentUserToken };

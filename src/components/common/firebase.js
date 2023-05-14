import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_URL,
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

const getCurrentUserToken = async () => {
  const user = auth.currentUser;

  if (user) {
    const uid = user.uid;
    const idToken = await user.getIdToken();
    return { uid, idToken };
  } else {
    console.error('No user is currently signed in');
    return null;
  }
};

export { storage, auth, db, getCurrentUserToken };

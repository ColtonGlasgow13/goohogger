import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

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

const fetchUsers = async () => {
  const usersJSONRef = ref(storage, 'users.json');
  const usersJSON = await getDownloadURL(usersJSONRef);
  const response = await fetch(usersJSON);
  const data = await response.json();
  console.log('Fetched users:', data);
  return data.users;
};

export { storage, fetchUsers, auth };

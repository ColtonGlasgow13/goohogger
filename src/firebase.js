import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  authDomain: 'goohogger.com',
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_URL,
  apiKey: 'your-api-key',
};

const app = firebase.initializeApp(firebaseConfig);

const storage = getStorage(app);

const fetchUsers = async () => {
  const usersJSONRef = ref(storage, 'users.json');
  const usersJSON = await getDownloadURL(usersJSONRef);
  const response = await fetch(usersJSON);
  const data = await response.json();
  console.log('Fetched users:', data);
  return data.users;
};

export { storage, fetchUsers };

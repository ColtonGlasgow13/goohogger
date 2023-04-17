import firebase from 'firebase/app';
import 'firebase/auth'; // If you're using Firebase Authentication

const firebaseConfig = {
  // Your Firebase configuration object goes here
};

firebase.initializeApp(firebaseConfig);

export default firebase;
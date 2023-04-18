import firebase from 'firebase/app';
import 'firebase/auth'; // If you're using Firebase Authentication

const firebaseConfig = {
  authDomain: "goohogger.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
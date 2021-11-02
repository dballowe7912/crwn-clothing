import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBY7DgbG7yX22pHzgYauVgjEM3wuzE1rzc",
    authDomain: "crwn-db-a5b8b.firebaseapp.com",
    projectId: "crwn-db-a5b8b",
    storageBucket: "crwn-db-a5b8b.appspot.com",
    messagingSenderId: "190064420592",
    appId: "1:190064420592:web:e4ed513983545e208a4435"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
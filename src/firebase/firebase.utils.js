import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVxT5atkf9gOQYb63mwWgt1swtKT_UXbw",
    authDomain: "clothing-ecomm-db-83f45.firebaseapp.com",
    databaseURL: "https://clothing-ecomm-db-83f45.firebaseio.com",
    projectId: "clothing-ecomm-db-83f45",
    storageBucket: "clothing-ecomm-db-83f45.appspot.com",
    messagingSenderId: "765110438372",
    appId: "1:765110438372:web:38ffed3292669166f25ff1",
    measurementId: "G-W34P47Y8SW"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

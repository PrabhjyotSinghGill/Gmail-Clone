import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQMwTrK_mztiZp2M1Bz2e1pyklo3qLkeo",
  authDomain: "clone-74c14.firebaseapp.com",
  projectId: "clone-74c14",
  storageBucket: "clone-74c14.appspot.com",
  messagingSenderId: "579103441703",
  appId: "1:579103441703:web:6d9abfeb90aa6e4a57df02",
  measurementId: "G-QNGVMYW990"
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default firebaseApp;

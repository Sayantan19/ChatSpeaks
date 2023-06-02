import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABMEaxE4qQTJ_i2DMtOY0hstgWkECp54w",
  authDomain: "chat-speaks.firebaseapp.com",
  projectId: "chat-speaks",
  storageBucket: "chat-speaks.appspot.com",
  messagingSenderId: "35860959982",
  appId: "1:35860959982:web:a3326e8e6582973db8d9ff",
  measurementId: "G-HTVKK94YD8"
};
firebase.initializeApp(firebaseConfig);

// Create and export the AuthUI instance
export const firestore = firebase.firestore()
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();


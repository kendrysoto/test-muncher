// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Zg-WvZoZM6bjw7qf7BS23uEXBVOMXhA",
  authDomain: "crud-test-muncher.firebaseapp.com",
  projectId: "crud-test-muncher",
  storageBucket: "crud-test-muncher.appspot.com",
  messagingSenderId: "479927989433",
  appId: "1:479927989433:web:8c9368662f44647292d768"
};

const fb = firebase.initializeApp(firebaseConfig);
//export const auth = firebase.auth();

export const db = fb.firestore();

export const authUser = getAuth(fb)
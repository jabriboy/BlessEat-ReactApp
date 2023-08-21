// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBXc_Evfu7vo8lufgiSZwAyB4-cjV3Sc8",
  authDomain: "bless-eat.firebaseapp.com",
  projectId: "bless-eat",
  storageBucket: "bless-eat.appspot.com",
  messagingSenderId: "310373973145",
  appId: "1:310373973145:web:a9e52b7e060a92ea9fcc08",
  measurementId: "G-9DW915FB5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app)
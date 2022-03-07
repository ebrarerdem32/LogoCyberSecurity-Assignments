// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
import 'firebase/firebase-app';

import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7vsklmbOV04lXM5PQEqZ-qGJXBZGTWGc",
  authDomain: "homework3-2a071.firebaseapp.com",
  projectId: "homework3-2a071",
  storageBucket: "homework3-2a071.appspot.com",
  messagingSenderId: "921435999040",
  appId: "1:921435999040:web:f8cddd0752973b6e57c8a5",
  measurementId: "G-PWRX5P2812"
};
// Initialize Firebase
/*let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const fireStore = firebase.fireStore();
const auth = firebase.auth();
const background = firebase.functions();
export { fireStore, auth };*/
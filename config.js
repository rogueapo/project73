import * as firebase from "firebase";
require("@firebase/firestore");

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAkj7BIm6mMRPaHaTCyutsnKCGipLsQCg",
  authDomain: "pro-73-c81ce.firebaseapp.com",
  databaseURL: "https://pro-73-c81ce-default-rtdb.firebaseio.com",
  projectId: "pro-73-c81ce",
  storageBucket: "pro-73-c81ce.appspot.com",
  messagingSenderId: "749603455621",
  appId: "1:749603455621:web:0c21a2f2e255fe1f775fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

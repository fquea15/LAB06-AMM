// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1v2auWvtfENC0BnVL_8uv71AwqrCM41s",
  authDomain: "amm-lab06-f23de.firebaseapp.com",
  projectId: "amm-lab06-f23de",
  storageBucket: "amm-lab06-f23de.appspot.com",
  messagingSenderId: "613660159280",
  appId: "1:613660159280:web:358300a9249cd53c00acf5",
  //measurementId: "G-D0EVL6LS6E"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const database = getFirestore()
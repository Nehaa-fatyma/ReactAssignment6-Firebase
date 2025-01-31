// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC4FRqmBb0k_xwdjRF4g097mcBLOlNpdIw",
  authDomain: "react-firebase-32128.firebaseapp.com",
  projectId: "react-firebase-32128",
  storageBucket: "react-firebase-32128.firebasestorage.app",
  messagingSenderId: "239076538057",
  appId: "1:239076538057:web:e710ef671a5d5d664eff18",
  measurementId: "G-T3HP0MP6DH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app);
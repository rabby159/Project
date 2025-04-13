// Do not config on the clint side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7_oEVs0ppwdCd6Vv7SxerU0lez6sMWfU",
  authDomain: "simple-book-489e8.firebaseapp.com",
  projectId: "simple-book-489e8",
  storageBucket: "simple-book-489e8.firebasestorage.app",
  messagingSenderId: "449555916669",
  appId: "1:449555916669:web:659f69c5f4836c46d44e14",
  measurementId: "G-6S4BKKDM84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

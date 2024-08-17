// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ZeZMpQ4TAS3Nd2lqc77SGjLCfYemoPM",
  authDomain: "aiflashcard-bbb03.firebaseapp.com",
  projectId: "aiflashcard-bbb03",
  storageBucket: "aiflashcard-bbb03.appspot.com",
  messagingSenderId: "199516406162",
  appId: "1:199516406162:web:7d314aa5bb68d9df34014b",
  measurementId: "G-ZLXDFHSCS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
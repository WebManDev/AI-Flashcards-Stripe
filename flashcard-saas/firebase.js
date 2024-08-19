// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq7Pq2srUhd1zW85DR0jicCyotMJaozL0",
  authDomain: "flashcards-93178.firebaseapp.com",
  projectId: "flashcards-93178",
  storageBucket: "flashcards-93178.appspot.com",
  messagingSenderId: "594569133843",
  appId: "1:594569133843:web:3b2319d2d9b0b2b613a4e6",
  measurementId: "G-MVC2C24705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
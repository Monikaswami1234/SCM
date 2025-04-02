import xy from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"

import z from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpboPoKsTCudxaFol9CaeHKuX1RixN0LE",
  authDomain: "scm-connect-143b5.firebaseapp.com",
  projectId: "scm-connect-143b5",
  storageBucket: "scm-connect-143b5.firebasestorage.app",
  messagingSenderId: "892632465309",
  appId: "1:892632465309:web:13ac607e908de9386a3974",
  measurementId: "G-Y0B6X62BNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
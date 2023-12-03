import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgCqFUGMdWAPQx-xg64JTGdYwH-pJ56cw",
  authDomain: "fakestore-talentotech-d52b0.firebaseapp.com",
  projectId: "fakestore-talentotech-d52b0",
  storageBucket: "fakestore-talentotech-d52b0.appspot.com",
  messagingSenderId: "965560621804",
  appId: "1:965560621804:web:07a48579acebd4250163c9",
  measurementId: "G-9746VLJ7T7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

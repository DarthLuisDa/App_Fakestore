import React from 'react'      /* Importaciones */
import ReactDOM from 'react-dom/client'      /* Importaciones */
import App from './App.jsx'    /* Importando funcion App() del App.jsx */
import './index.css'     /* Importando el index.css */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";    /* Importando Modulos */
import { getAnalytics } from "firebase/analytics";    /* Importando Modulos */
import { getAuth } from "firebase/auth";                /* Importando Modulos */
import { getFirestore } from "firebase/firestore";      /* Importando Modulos */

//Importaciones para el Firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Conexion con mi Firebase
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



// Inicializando Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

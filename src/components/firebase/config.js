// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRgGvOG3m0te7a70am4TAIRKVVAfss9xs",
  authDomain: "tiendacarlos-6dfe8.firebaseapp.com",
  projectId: "tiendacarlos-6dfe8",
  storageBucket: "tiendacarlos-6dfe8.appspot.com",
  messagingSenderId: "1011239166892",
  appId: "1:1011239166892:web:f714602afa3f05bc1b5009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)

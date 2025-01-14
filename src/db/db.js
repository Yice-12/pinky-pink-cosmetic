// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4fus1Ep-aTAtOuvDgOb66gxjZxXWMXgg",
  authDomain: "ecommerce-4349c.firebaseapp.com",
  projectId: "ecommerce-4349c",
  storageBucket: "ecommerce-4349c.firebasestorage.app",
  messagingSenderId: "856631320755",
  appId: "1:856631320755:web:78e8431e86f29eef5910c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

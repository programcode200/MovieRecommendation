// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9A4BM9TgN8DxBYOmZUC3wQEXqh3iwLqw",
  authDomain: "netflix-2dccb.firebaseapp.com",
  projectId: "netflix-2dccb",
  storageBucket: "netflix-2dccb.firebasestorage.app",
  messagingSenderId: "882559792740",
  appId: "1:882559792740:web:695594455f487837f4d171",
  measurementId: "G-47SBYVPP5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();    //this common for auth of firebase so place it in common file 
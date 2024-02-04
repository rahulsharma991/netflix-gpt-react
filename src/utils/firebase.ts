// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaBf7ObTWWUZYiUZqLiNDBNYyzhrdNto4",
  authDomain: "netflixgpt-be5da.firebaseapp.com",
  projectId: "netflixgpt-be5da",
  storageBucket: "netflixgpt-be5da.appspot.com",
  messagingSenderId: "781007833583",
  appId: "1:781007833583:web:56fcab3c3d748cc8828e1a",
  measurementId: "G-2K1PT4JR84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

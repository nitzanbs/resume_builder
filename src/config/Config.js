// Import the functions you need from the SDKs you need
import {getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4pQlexTGwSFbhPu8L6iHgecv0Z5-E484",
  authDomain: "resume-builder-493d3.firebaseapp.com",
  projectId: "resume-builder-493d3",
  storageBucket: "resume-builder-493d3.appspot.com",
  messagingSenderId: "398334981352",
  appId: "1:398334981352:web:717986feac80d16262055d",
  measurementId: "G-S128PP9DXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);
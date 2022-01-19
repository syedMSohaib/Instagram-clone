// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDxfunY1Kyy4TUqCK3Dm96EBUsOJuTIIs",
  authDomain: "instagram-clone-50db7.firebaseapp.com",
  projectId: "instagram-clone-50db7",
  storageBucket: "instagram-clone-50db7.appspot.com",
  messagingSenderId: "338842720387",
  appId: "1:338842720387:web:ebed3d8477bc5a65e7e3b6",
  measurementId: "G-914TRLD006",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, analytics, storage };

import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtzBlX9bulUTzPEK9K1-gBWjp1JmRtuww",
  authDomain: "interviewprep-50563.firebaseapp.com",
  projectId: "interviewprep-50563",
  storageBucket: "interviewprep-50563.firebasestorage.app",
  messagingSenderId: "896889744243",
  appId: "1:896889744243:web:bb9c392683e8e93f03b306",
  measurementId: "G-W6DFXREQXV",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

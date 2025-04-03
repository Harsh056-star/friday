// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth } from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA8WWGXvm1jticwDs8EPEhf2gobHwP0A4",
  authDomain: "friday-ab131.firebaseapp.com",
  projectId: "friday-ab131",
  storageBucket: "friday-ab131.firebasestorage.app",
  messagingSenderId: "95090311611",
  appId: "1:95090311611:web:5da5a9073e33ff4bb9849e",
  measurementId: "G-XWX0M9M37V"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db =getFirestore(app);
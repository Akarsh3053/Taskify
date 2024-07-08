// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskify-58fd4.firebaseapp.com",
  projectId: "taskify-58fd4",
  storageBucket: "taskify-58fd4.appspot.com",
  messagingSenderId: "1044780344432",
  appId: "1:1044780344432:web:727cfc9b8ed951aaf680b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
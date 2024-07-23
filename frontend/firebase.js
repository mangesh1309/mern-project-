// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9c38c.firebaseapp.com",
  projectId: "mern-estate-9c38c",
  storageBucket: "mern-estate-9c38c.appspot.com",
  messagingSenderId: "273287711414",
  appId: "1:273287711414:web:90734dcaebeb5bbe63b417",
  measurementId: "G-JFR9GQRQZG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


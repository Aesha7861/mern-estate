// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dreamfollow-717df.firebaseapp.com",
  projectId: "dreamfollow-717df",
  storageBucket: "dreamfollow-717df.appspot.com",
  messagingSenderId: "712804122894",
  appId: "1:712804122894:web:c7ced4926434a2f564d75f",
  measurementId: "G-P9ENBK0G8N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
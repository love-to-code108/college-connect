
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCI7au-yoqWhAqciFfNBEutqAkPT8-Z84U",
  authDomain: "college-connect108.firebaseapp.com",
  projectId: "college-connect108",
  storageBucket: "college-connect108.appspot.com",
  messagingSenderId: "890924336687",
  appId: "1:890924336687:web:8c29012e7b9e63cd3c28da",
  measurementId: "G-LRB4ZWHTN9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();

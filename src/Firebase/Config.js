import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBq6JL3nySX2krC_KksNm9RkZPq9XAVO-g",
  authDomain: "simplechat-e2d39.firebaseapp.com",
  projectId: "simplechat-e2d39",
  storageBucket: "simplechat-e2d39.appspot.com",
  messagingSenderId: "468827902710",
  appId: "1:468827902710:web:3bf125e0af5ac6d411d2d7",
  measurementId: "G-HTQ3GFXFZZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);

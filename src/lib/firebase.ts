// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDN6cO9SWdDf_IBAiN79daHynBKxZxCVsQ",
  authDomain: "k-auth-72e21.firebaseapp.com",
  databaseURL: "https://k-auth-72e21-default-rtdb.firebaseio.com",
  projectId: "k-auth-72e21",
  storageBucket: "k-auth-72e21.appspot.com",
  messagingSenderId: "217349089699",
  appId: "1:217349089699:web:b14d1bb22fd6176f0a5216"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAarE4HUQwnROMf8tcpLMHCKtCyCHLaOwM",
  authDomain: "myblog-2c252.firebaseapp.com",
  projectId: "myblog-2c252",
  storageBucket: "myblog-2c252.appspot.com",
  messagingSenderId: "994142800411",
  appId: "1:994142800411:web:6ddc1efafb9e0da473c6be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb,auth,storage}
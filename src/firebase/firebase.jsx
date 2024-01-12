// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLRs5f-LoMdiVaa1IItKDwWBdJlsjNPp8",
  authDomain: "instacloneproject-2996d.firebaseapp.com",
  projectId: "instacloneproject-2996d",
  storageBucket: "instacloneproject-2996d.appspot.com",
  messagingSenderId: "212873713911",
  appId: "1:212873713911:web:b7648599f6e30196c41bf2",
  measurementId: "G-LSY71WCKVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage}
 
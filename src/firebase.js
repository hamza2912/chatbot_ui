// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkuPzgSyOGWt_4OTkbN_WmhHjSTXG1Yo4",
  authDomain: "chatroom-pix.firebaseapp.com",
  databaseURL: "https://chatroom-pix-default-rtdb.firebaseio.com",
  projectId: "chatroom-pix",
  storageBucket: "chatroom-pix.appspot.com",
  messagingSenderId: "130858503114",
  appId: "1:130858503114:web:36ff4efa67724831161d33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
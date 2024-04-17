// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgL49HdJfv722HOr4GWvN60kmaV3EV7gk",
  authDomain: "thankyou-ddabong-dochi.firebaseapp.com",
  databaseURL: "https://thankyou-ddabong-dochi-default-rtdb.firebaseio.com",
  projectId: "thankyou-ddabong-dochi",
  storageBucket: "thankyou-ddabong-dochi.appspot.com",
  messagingSenderId: "1094021239697",
  appId: "1:1094021239697:web:f552f6ad81dff456f0c030",
  measurementId: "G-YRDNC063P6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { env } from "process";
// TODO: Add SDKs for Firebase products that you want to use



// Your web app's Firebase configuration
const firebaseConfig = {
  // Added .env Variable "TODO"
  apiKey: "AIzaSyBttQBQSjw13A1gDAD78yflTN89UGbYHac",
  authDomain: "hh-medline.firebaseapp.com",
  projectId: "hh-medline",
  storageBucket: "hh-medline.appspot.com",
  messagingSenderId: "217715538728",
  appId: "1:217715538728:web:0ff1fc77583b4540006e1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDywXmTVkPgznT-CRqvG5lntLB2193yLZg",
  authDomain: "chat-app-react-firebase-1b50f.firebaseapp.com",
  projectId: "chat-app-react-firebase-1b50f",
  storageBucket: "chat-app-react-firebase-1b50f.appspot.com",
  messagingSenderId: "447024770672",
  appId: "1:447024770672:web:934361cb925201b380ceb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

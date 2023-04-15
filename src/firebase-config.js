// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy1TrzW0rXIpKth5hypORUceEFlBqJg1k",
  authDomain: "book-store-bc83b.firebaseapp.com",
  projectId: "book-store-bc83b",
  storageBucket: "book-store-bc83b.appspot.com",
  messagingSenderId: "134233178986",
  appId: "1:134233178986:web:61249fe7dd5b64d2931b13",
  measurementId: "G-8SMZE7DE1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);
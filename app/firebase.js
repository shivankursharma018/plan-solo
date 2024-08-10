// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7-myp1qQpNkn1IPFCLaSkGLVEbPPl9f4",
  authDomain: "plan-solo-d187d.firebaseapp.com",
  projectId: "plan-solo-d187d",
  storageBucket: "plan-solo-d187d.appspot.com",
  messagingSenderId: "520818865213",
  appId: "1:520818865213:web:99ef30b4d915dc42aba654"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export const auth = getAuth(app);
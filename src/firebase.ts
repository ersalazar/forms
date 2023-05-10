// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCIgfct2lCWrf1OX4jVdmYDoR06TLWa9gY",
  authDomain: "test-8ac5a.firebaseapp.com",
  projectId: "test-8ac5a",
  storageBucket: "test-8ac5a.appspot.com",
  messagingSenderId: "659053615147",
  appId: "1:659053615147:web:5448b2413a6bc15f15f26e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
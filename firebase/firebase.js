
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDPaiWUWzIUKlocCBZ513Fg7B6pYJwL7SY",
  authDomain: "fir-to-do-fc65b.firebaseapp.com",
  projectId: "fir-to-do-fc65b",
  storageBucket: "fir-to-do-fc65b.appspot.com",
  messagingSenderId: "336489742755",
  appId: "1:336489742755:web:e5bb2c4169739116c6da16",
  measurementId: "G-YCR6T103S0"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);

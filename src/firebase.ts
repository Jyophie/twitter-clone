import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAFUhL9CLSr90c12v75Q8jJKO7P5obPdY",
  authDomain: "my-twitter-clone-9c368.firebaseapp.com",
  projectId: "my-twitter-clone-9c368",
  storageBucket: "my-twitter-clone-9c368.appspot.com",
  messagingSenderId: "572249052652",
  appId: "1:572249052652:web:135b53a21602da8db11cc9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);

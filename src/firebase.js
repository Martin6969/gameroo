import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6wUHFV9Q44lwrQGywyP62yTepf0EFI8Q",
    authDomain: "gameroo-e1479.firebaseapp.com",
    projectId: "gameroo-e1479",
    storageBucket: "gameroo-e1479.appspot.com",
    messagingSenderId: "113821287717",
    appId: "1:113821287717:web:360c7ea785734635c806cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    firebase, db
};
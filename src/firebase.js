import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD6wUHFV9Q44lwrQGywyP62yTepf0EFI8Q",
    authDomain: "gameroo-e1479.firebaseapp.com",
    projectId: "gameroo-e1479",
    storageBucket: "gameroo-e1479.appspot.com",
    messagingSenderId: "113821287717",
    appId: "1:113821287717:web:360c7ea785734635c806cc"
};

firebase.initializeApp(firebaseConfig)
let db = firebase.firestore();
let storage = firebase.storage();

export {
    firebase, db, storage
};
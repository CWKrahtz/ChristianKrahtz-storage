import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    // ... FIREBASE_CONFIGURATION
    apiKey: "AIzaSyDKmnDFaARMzOX89XeX4yy_waS3d7ynibw",
    authDomain: "class-work-fe628.firebaseapp.com",
    projectId: "class-work-fe628",
    storageBucket: "class-work-fe628.appspot.com",
    messagingSenderId: "582336478356",
    appId: "1:582336478356:web:bc13a0b63bc2c9a07c0881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// TODO: Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app)
//When we export a variable/function, it is accessable in other files.
//db is our connection var to firestore
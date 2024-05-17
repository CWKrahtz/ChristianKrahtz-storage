import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    // ... FIREBASE_CONFIGURATION
    apiKey: "AIzaSyAtT9dSR9gaquGwutBM43SFHhNNglBDBio",
    authDomain: "class-work-126e7.firebaseapp.com",
    projectId: "class-work-126e7",
    storageBucket: "class-work-126e7.appspot.com",
    messagingSenderId: "1004975980626",
    appId: "1:1004975980626:web:edb186408c378ef3325f8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app) 
//when we export a variable/function, it is accessable in other files
//db is our connect var to our firestore
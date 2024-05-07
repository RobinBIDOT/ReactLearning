// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjdr3_Bpvw2rHui9qqgcNxAxckyyEBiRI",
    authDomain: "chatbox-app-f2350.firebaseapp.com",
    databaseURL: "https://chatbox-app-f2350-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatbox-app-f2350",
    storageBucket: "chatbox-app-f2350.appspot.com",
    messagingSenderId: "287788023397",
    appId: "1:287788023397:web:98ca140d8e27f65737508c",
    measurementId: "G-FR9QE4HZLT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(firebaseApp);

// Get a reference to the database service
const base = getDatabase(firebaseApp);
// const firestore = getFirestore(firebaseApp); // Uncomment if using Firestore

export { firebaseApp, analytics, base }; // Export the required services
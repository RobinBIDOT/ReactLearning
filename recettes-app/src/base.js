// Import the necessary functions from Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Firebase configuration object containing all the necessary Firebase project details
const firebaseConfig = {
    apiKey: "AIzaSyDQkrGh8tHsuYiEHSGaIy-Ozcc7rG0fGZ4",
    authDomain: "recettes-app-f6970.firebaseapp.com",
    databaseURL: "https://recettes-app-f6970-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "recettes-app-f6970",
    storageBucket: "recettes-app-f6970.appspot.com",
    messagingSenderId: "425191560059",
    appId: "1:425191560059:web:dde97d9b7f6be95be163de",
    measurementId: "G-9RXLFWR6Z0"
};

// Initializing Firebase with the specified configuration
const app = initializeApp(firebaseConfig);

// Get an instance of the Firebase Auth service
const auth = getAuth(app);

// Setting up the Facebook authentication provider
const facebookProvider = new FacebookAuthProvider();

// Function to handle user login via Facebook popup
export const loginWithFacebook = async () => {
    try {
        const result = await signInWithPopup(auth, facebookProvider);
        // Optionally handle sign-in result here if necessary
        return result; // This returns the sign-in result to wherever the function was called
    } catch (error) {
        console.error("Error during Facebook login:", error);
        throw error; // Rethrowing the error to handle it in the caller
    }
};

// Function to handle user logout
export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error during logout:", error);
        throw error;
    }
};

// Get an instance of the Firebase Database service
const database = getDatabase(app);

// Export the required services and functions
export { app as firebaseApp, database as base, auth, onAuthStateChanged };

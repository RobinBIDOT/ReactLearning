// Importation des fonctions nécessaires depuis les SDKs Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Ajouter les SDKs pour les produits Firebase que vous souhaitez utiliser
// Voir la documentation pour plus d'informations: https://firebase.google.com/docs/web/setup#available-libraries

// Configuration de votre application web Firebase
// Pour le SDK Firebase JS v7.20.0 et versions ultérieures, measurementId est optionnel
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

// Initialisation de Firebase avec la configuration spécifiée
const firebaseApp = initializeApp(firebaseConfig);

// Initialisation de Firebase Analytics
const analytics = getAnalytics(firebaseApp);

// Obtention d'une référence au service de base de données
const base = getDatabase(firebaseApp);
// const firestore = getFirestore(firebaseApp); // Décommenter si vous utilisez Firestore

// Export des services requis
export { firebaseApp, analytics, base }; // Exporte les services requis pour une utilisation dans d'autres parties de l'application

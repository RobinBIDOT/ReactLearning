// Importation des fonctions nécessaires depuis les SDKs Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Ajouter les SDKs pour les produits Firebase que vous souhaitez utiliser
// Voir la documentation pour plus d'informations: https://firebase.google.com/docs/web/setup#available-libraries

// Configuration de votre application web Firebase
// Pour le SDK Firebase JS v7.20.0 et versions ultérieures, measurementId est optionnel
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx"
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

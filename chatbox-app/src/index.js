import React from 'react';
import './css/index.css';
import AppWrapper from './components/AppWrapper';
import Connexion from "./components/Connexion";
import * as serviceWorker from './serviceWorker'; // Importation des utilitaires de service worker
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";

/**
 * Composant Root qui configure le routage de l'application.
 * Utilise BrowserRouter pour gérer l'historique de navigation.
 * Définit les routes pour la connexion, l'application principale et les pages non trouvées.
 *
 * @returns {JSX.Element} Le routeur avec les routes configurées.
 */
const Root = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Connexion />} /> {/* Route pour la page de connexion */}
            <Route path='/pseudo/:pseudo' element={<AppWrapper />} /> {/* Route pour l'application principale après connexion */}
            <Route path='*' element={<NotFound />} /> {/*Route pour capturer toutes les autres URL non définies */}
        </Routes>
    </BrowserRouter>
);

// Rendu de l'élément Root dans le DOM
createRoot(document.getElementById('root')).render(<Root />);

// Désinscription du service worker pour éviter la mise en cache des assets
serviceWorker.unregister();

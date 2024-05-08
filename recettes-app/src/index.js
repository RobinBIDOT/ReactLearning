import React from 'react'
import './index.css'
import App from './App'
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker'
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Root = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Connexion />} />
            <Route path='/pseudo/:pseudo' element={<App />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
);

// Rendu de l'élément Root dans le DOM
const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(<Root />);
} else {
    console.error('Failed to find the root element');
}

// Configuration du service worker
serviceWorker.unregister(); // Utilisez register() pour activer le service worker

/**
 * Composant AppWrapper pour encapsuler le composant App.
 * Ce composant utilise le hook useParams de react-router-dom pour obtenir le paramètre 'pseudo' de l'URL.
 *
 * @returns {JSX.Element} Renvoie le composant App avec la prop 'pseudo' passée en paramètre.
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import App from '../App';

const AppWrapper = () => {
    const { pseudo } = useParams(); // Récupère le pseudo depuis les paramètres de l'URL
    return <App pseudo={pseudo} />; // Passe le pseudo comme prop au composant App
}

export default AppWrapper;

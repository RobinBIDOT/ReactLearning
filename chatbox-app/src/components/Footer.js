/**
 * Composant Footer qui affiche des informations de droit d'auteur.
 * Utilise la date actuelle pour mettre à jour automatiquement l'année.
 *
 * @returns {JSX.Element} Le JSX du composant Footer qui inclut le texte de droit d'auteur.
 */
import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Formation React JS, Skilleos - Robin BIDOT, web dev</p>
        </footer>
    );
}

export default Footer;

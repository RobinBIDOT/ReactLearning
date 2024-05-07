/**
 * Composant Header qui affiche le titre de l'application.
 * Ce composant est fonctionnel et sert principalement à présenter le nom de l'application dans une balise <header>.
 *
 * @returns {JSX.Element} Le JSX du composant Header qui inclut un titre.
 */
import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="title">Chatbox-App</h1>
        </header>
    );
}

export default Header;

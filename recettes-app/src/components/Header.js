import React, { useContext } from 'react';
import { ColorContext } from './Color';

const Header = ({ pseudo }) => {
    const { state } = useContext(ColorContext);
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;

    return (
        <header style={{ backgroundColor: state.color }}>
            <h1>La boîte à recettes {formatPseudo(pseudo)}</h1>
        </header>
    );
};

export default Header;

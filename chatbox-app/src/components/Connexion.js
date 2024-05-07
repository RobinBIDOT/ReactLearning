/**
 * Composant Connexion qui gère le formulaire d'entrée des utilisateurs pour accéder au chat.
 * Ce composant utilise le state pour suivre le pseudo de l'utilisateur et une condition de redirection.
 *
 * @extends Component
 */
import React, { Component, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

class Connexion extends Component {
    /**
     * Construit le composant Connexion avec un état initial.
     */
    state = {
        pseudo: '', // Stocke le pseudo entré par l'utilisateur
        goToChat: false, // Booléen pour contrôler la navigation vers le chat
    }

    /**
     * Gère le changement des entrées de l'utilisateur dans le champ du pseudo.
     * @param {Event} event - L'événement de l'entrée utilisateur.
     */
    handleChange = event => {
        const pseudo = event.target.value;
        this.setState({ pseudo });
    }

    /**
     * Gère la soumission du formulaire et déclenche la redirection.
     * @param {Event} event - L'événement de soumission du formulaire.
     */
    handleSubmit = event => {
        event.preventDefault(); // Empêche le rechargement de la page
        this.setState({ goToChat: true }); // Déclenche la redirection vers le chat
    }

    /**
     * Rendu du composant Connexion.
     * S'il faut rediriger vers le chat, <Navigate> est utilisé pour changer de route.
     * Sinon, il affiche le formulaire de connexion.
     * @returns {JSX.Element} Le JSX du composant, incluant le Header, le formulaire de connexion, et le Footer.
     */
    render() {
        if (this.state.goToChat) {
            return <Navigate push to={`/pseudo/${this.state.pseudo}`} />;
        }
        return (
            <Fragment>
                <Header />
                <div className='connexionBox'>
                    <form className='connexion' onSubmit={this.handleSubmit}>
                        <input
                            value={this.state.pseudo}
                            onChange={this.handleChange}
                            placeholder='Pseudo'
                            type="text"
                            required
                        />
                        <button type='submit'>GO</button>
                    </form>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Connexion;

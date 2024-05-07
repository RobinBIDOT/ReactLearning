/**
 * Composant Formulaire qui permet aux utilisateurs de saisir et envoyer un message.
 * Ce composant gère l'état local du message saisi, sa longueur, et envoie le message final.
 *
 * @extends Component
 */
import React, { Component } from 'react';

class Formulaire extends Component {
    /**
     * Initialise l'état du composant avec un message vide et une longueur initiale basée sur les props.
     */
    state = {
        message: '',
        length: this.props.length
    }

    /**
     * Crée et envoie un message à partir des valeurs actuelles de l'état et des props.
     * Réinitialise ensuite l'état du message à vide et la longueur à sa valeur initiale.
     */
    createMessage = () => {
        const { addMessage, pseudo, length } = this.props;
        const message = {
            pseudo,
            message: this.state.message
        };
        addMessage(message);
        this.setState({ message: '', length });
    }

    /**
     * Gère la soumission du formulaire.
     * @param {Event} event - L'événement de soumission du formulaire.
     */
    handleSubmit = event => {
        event.preventDefault();
        this.createMessage();
    }

    /**
     * Gère les changements dans le champ de texte, mettant à jour l'état avec le nouveau message
     * et recalculant la longueur restante autorisée.
     * @param {Event} event - L'événement de changement sur le champ de texte.
     */
    handleChange = event => {
        const message = event.target.value;
        const length = this.props.length - message.length;
        this.setState({ message, length });
    }

    /**
     * Permet d'envoyer le message en appuyant sur la touche 'Entrée'.
     * @param {Event} event - L'événement de touche relevé sur le champ de texte.
     */
    handleKeyUp = event => {
        if (event.key === 'Enter') {
            this.createMessage();
        }
    }

    /**
     * Rendu du formulaire incluant un champ de texte pour saisir le message, un compteur de caractères
     * et un bouton pour envoyer le message.
     * @returns {JSX.Element} Le JSX du formulaire.
     */
    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    required
                    maxLength={this.props.length}
                />
                <div className='info'>
                    { this.state.length }
                </div>
                <button type='submit'>
                    Envoyer !
                </button>
            </form>
        );
    }
}

export default Formulaire;

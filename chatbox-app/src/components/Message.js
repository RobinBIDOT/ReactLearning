/**
 * Composant Message qui affiche un message individuel dans la chatbox.
 * Il détermine le style de message à afficher en fonction de si le message provient de l'utilisateur actuel ou d'un autre utilisateur.
 *
 * @param {string} pseudo - Le pseudo de l'utilisateur qui a envoyé le message.
 * @param {string} message - Le contenu du message à afficher.
 * @param {function} isUser - Fonction qui détermine si le message provient de l'utilisateur actuel.
 * @returns {JSX.Element} Un élément <p> contenant le message, stylisé différemment selon l'émetteur.
 */
import React from 'react';

const Message = ({ pseudo, message, isUser }) => {
    if (isUser(pseudo)) {
        return (
            <p className='user-message'>
                {message}
            </p>
        );
    } else {
        return (
            <p className='not-user-message'>
                <strong>{ pseudo } :</strong> {message}
            </p>
        );
    }
}

export default Message;

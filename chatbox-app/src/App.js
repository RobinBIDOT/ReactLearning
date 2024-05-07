/**
 * Composant App principal de l'application de chat.
 * Gère les messages, l'authentification des utilisateurs, et l'affichage via React Transition Group.
 *
 * @extends Component
 */
import React, {Component, createRef, Fragment} from 'react'
import './css/App.css'
import './css/aminations.css'
import Formulaire from "./components/Formulaire"; // Composant pour l'envoi des messages
import Message from "./components/Message"; // Composant pour afficher les messages
import Header from './components/Header'; // Composant pour le header de l'application
import Footer from './components/Footer'; // Composant pour le footer de l'application
import { ref, set, onValue } from "firebase/database"; // Fonctions Firebase pour la gestion de la base de données
import { base } from './base'; // Référence à la base de données Firebase

import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Utilitaires pour les animations de transition


class App extends Component {
    state = {
        messages: {}, // stocke les messages
        pseudo: this.props.pseudo // pseudo de l'utilisateur connecté
    }

    messagesRef = createRef(); // Référence DOM pour les messages pour le scrolling automatique

    /**
     * Se connecte à la base de données Firebase au montage du composant et écoute les modifications.
     */
    componentDidMount() {
        const messagesRef = ref(base, '/');
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val() || {};
            this.setState({ messages: data });
        }, {
            onlyOnce: false
        });
    }

    /**
     * Assure que la vue des messages soit toujours scrollée vers le bas à chaque mise à jour du composant.
     */
    componentDidUpdate () {
        const ref = this.messagesRef.current
        ref.scrollTop = ref.scrollHeight // Scroll vers le bas
    }

    /**
     * Ajoute un message dans la base de données Firebase et gère la capacité de stockage en ne conservant que les 10 derniers messages.
     * @param {Object} message - Contient le pseudo de l'utilisateur et le texte du message.
     */
    addMessage = message => {
        const key = `message-${Date.now()}`;
        let messages = { ...this.state.messages, [key]: message };

        set(ref(base, `/${key}`), message).catch(error => {
            console.error("Error writing new message to Firebase Database", error);
        });

        const messageKeys = Object.keys(messages);
        const sortedKeys = messageKeys.sort((a, b) => a.localeCompare(b));
        if (sortedKeys.length > 10) {
            const keysToRemove = sortedKeys.slice(0, sortedKeys.length - 10);
            keysToRemove.forEach(key => {
                delete messages[key];
                set(ref(base, `/${key}`), null); // Supprime les anciens messages de Firebase
            });
        }

        this.setState({ messages });
    }

    /**
     * Détermine si le message a été envoyé par l'utilisateur actuel.
     * @param {string} pseudo - Le pseudo à vérifier.
     * @returns {boolean} Vrai si le pseudo correspond à celui de l'utilisateur connecté.
     */
    isUser = pseudo => pseudo === this.state.pseudo

    /**
     * Rendu du composant App avec Header, messages, Formulaire et Footer.
     * @returns {JSX.Element}
     */
    render () {
        const messages = Object.keys(this.state.messages).map(key => (
            <CSSTransition key={key} timeout={300} classNames="fade">
                <Message
                    isUser={this.isUser}
                    message={this.state.messages[key].message}
                    pseudo={this.state.messages[key].pseudo}
                />
            </CSSTransition>
        ));
    return (
        <Fragment>
        <Header />
      <div className='box'>
        <div>
          <div className="messages" ref={this.messagesRef}>
              <TransitionGroup className='message'>
                  { messages }
              </TransitionGroup>
          </div>
        </div>
        <Formulaire
            length={140}
            pseudo={this.state.pseudo}
        addMessage={this.addMessage}/>

      </div>
        <Footer />
        </Fragment>
    )
  }
}

export default App;

import React, {Component, createRef, Fragment} from 'react'
import './css/App.css'
import './css/aminations.css'
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";
import Header from './components/Header';
import Footer from './components/Footer';
import { ref, set, onValue } from "firebase/database";
import { base } from './base';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
    state = {
        messages: {},
        pseudo: this.props.pseudo
    }

    messagesRef = createRef()

    componentDidMount() {
        const messagesRef = ref(base, '/');
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val() || {};
            this.setState({ messages: data });
        }, {
            onlyOnce: false
        });
    }

    componentDidUpdate () {
        const ref = this.messagesRef.current
        ref.scrollTop = ref.scrollHeight
    }

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
                set(ref(base, `/${key}`), null);
            });
        }

        this.setState({ messages });
    }


    isUser = pseudo => pseudo === this.state.pseudo

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

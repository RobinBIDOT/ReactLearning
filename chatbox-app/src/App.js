import React, { Component, createRef } from 'react'
import './App.css'
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

import { ref, set, onValue } from "firebase/database";
import { base } from './base';

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


    render () {
        const messages = Object
            .keys(this.state.messages)
            .map(key => (
                <Message
                key={key}
                message={this.state.messages[key].message}
                pseudo={this.state.messages[key].pseudo} />
            ))
    return (
      <div className='box'>
        <div>
          <div className="messages" ref={this.messagesRef}>
              <div className='message'>
                  { messages }
              </div>
          </div>
        </div>
        <Formulaire
            length={140}
            pseudo={this.state.pseudo}
        addMessage={this.addMessage}/>

      </div>
    )
  }
}

export default App;

import React, { Component } from 'react'
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

    componentDidMount() {
        const messagesRef = ref(base, '/');
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val() || {};
            this.setState({ messages: data });
        }, {
            onlyOnce: false
        });
    }

    addMessage = message => {
        // Generate a new key for a new message
        const key = `message-${Date.now()}`;
        const messages = { ...this.state.messages, [key]: message };

        // Update Firebase directly
        set(ref(base, `/${key}`), message).catch(error => {
            console.error("Error writing new message to Firebase Database", error);
        });

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
          <div className="messages">
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

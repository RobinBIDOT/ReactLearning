import './App.css';
import Membre from "./components/Membre";
import Button from "./components/Button";
import {Component} from "react";


const famille = {
    membre1: {
        nom: 'Robin',
        age: 31
    },
    membre2: {
        nom: 'Carolina',
        age: 32
    },
    membre3: {
        nom: 'Camilla',
        age: 0
    },
    membre4: {
        nom: 'Mozart',
        age: 2
    },
}

class App extends Component {
    state = {
        famille
    }

    handleClick = (num) => {
        const famille = { ... this.state.famille }
        famille.membre1.age += num
        famille.membre2.age += num
        famille.membre3.age += num
        famille.membre4.age += num
        this.setState({ famille })
    }
    handleChange = event => {
        const famille = { ... this.state.famille }
        const nom = event.target.value
        famille.membre1.nom = nom
        this.setState({ famille })
    }
  render() {
    const {titre} =this.props
    const { famille } = this.state
    return (
        <div className='App'>
          <h1>{titre}</h1>
            <input value={famille.membre1.nom} onChange=
                {this.handleChange} type="text"/>
          <Membre
              age={famille.membre1.age}
              nom={famille.membre1.nom}/>
          <Membre
              age={famille.membre2.age}
              nom={famille.membre2.nom}/>
          <Membre
              age={famille.membre3.age}
              nom={famille.membre3.nom}/>
          <Membre
              age={famille.membre4.age}
              nom={famille.membre4.nom}>
              <strong>Je suis un chien.</strong>
          </Membre>
            <Button
            vieillir={() => this.handleClick(2)}/>
        </div>
    )
  }
}
export default App;

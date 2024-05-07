import './App.css';
import Membre from "./components/Membre";
import Button from "./components/Button";
import {Component} from "react";
import membre from "./components/Membre";


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
        nom: 'Lorena',
        age: 0
    },
    membre4: {
        nom: 'Mozart',
        age: 2
    },
}

class App extends Component {
    state = {
        famille,
        isShow: false
    }

    handleClick = (num) => {
        const famille = { ... this.state.famille }
        famille.membre1.age += num
        famille.membre2.age += num
        famille.membre3.age += num
        famille.membre4.age += num
        this.setState({ famille })
    }
    handleChange = (event, id) => {
        const famille = { ... this.state.famille }
        const nom = event.target.value
        famille[id].nom = nom
        this.setState({ famille })
    }
    cacherNom = id => {
        const famille = { ... this.state.famille }
        famille[id].nom = 'X'
        this.setState({ famille })
    }
    handleShowDescription = () => {
        const isShow = !this.state.isShow
        this.setState({ isShow })
    }

  render() {
    const {titre} =this.props
    const { famille, isShow } = this.state

     let description = null

     if (isShow) {
         description = (
             <strong>Je suis un chien.</strong>
         )
     }

     const liste = Object.keys(famille)
         .map(membre => (
             <Membre
                 key={membre}
                 handleChange={event => this.handleChange(event, membre)}
                 cacherNom = {() => this.cacherNom(membre)}
                 age={famille[membre].age}
                 nom={famille[membre].nom}/>
             )
         )

      return (
          <div className='App'>
          <h1>{titre}</h1>

              { liste }
              {/*<Membre
              age={famille.membre4.age}
              nom={famille.membre4.nom}>
              { description }
              <button onClick={this.handleShowDescription}>
                  { isShow ? 'Cacher' : 'Montrer' }
              </button>
          </Membre>
            <Button
            vieillir={() => this.handleClick(2)}/>*/}
        </div>
    )
  }
}
export default App;

import React, {Component} from 'react';

class Connexion extends Component {
    state = {
        pseudo: ''
    }
    handlChange = event => {
        const pseudo = event.target.valueOf()
        this.setState({pseudo})
    }
    
    render() {
        return (
            <div className='connexionBox'>
                <form className='connexion'>
                    <input
                        value={this.state.pseudo}
                        onChange={this.handlChange}
                        placeholder='Pseudo'
                        type="text"
                        required/>
                    <button type='submit'>GO</button>
                </form>
            </div>
        );
    }
}

export default Connexion;
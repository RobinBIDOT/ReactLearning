import React, {Component, Fragment} from 'react';
import { Navigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

class Connexion extends Component {
    state = {
        pseudo: '',
        goToChat: false,
    }

    handleChange = event => {
        const pseudo = event.target.value;
        this.setState({ pseudo });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ goToChat: true });
    }

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

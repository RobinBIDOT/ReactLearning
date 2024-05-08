import React, { Component } from 'react';
import AjouterRecette from "./AjouterRecette";
import Login from "./Login";
import AdminForm from "./AdminForm";

// Import from your base module or directly from Firebase SDKs
import { auth, loginWithFacebook, base, logout as firebaseLogout } from '../base'; // Ensure that logout is correctly exported from base.js
import { onAuthStateChanged } from "firebase/auth";

class Admin extends Component {
    state = {
        uid: null,
        chef: null
    };

    componentDidMount() {
        onAuthStateChanged(auth, user => {
            if (user) {
                this.handleAuth({ user });
            }
        });
    }

    handleAuth = async authData => {
        // Assuming `fetch` and `post` are correctly implemented for the new SDK in your `base.js`
        // This might need adjustment if `base` does not have these methods
        const box = await base.fetch(this.props.pseudo , { context: this });

        if (!box.chef) {
            await base.post(`${this.props.pseudo}/chef`, {
                data: authData.user.uid
            });
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        });
    }

    authenticate = () => {
        loginWithFacebook()
            .then(this.handleAuth)
            .catch(error => {
                console.error("Authentication error:", error);
            });
    }

    logout = async () => {
        console.log("Déconnexion");
        await firebaseLogout(); // Use the modular signOut method
        this.setState({ uid: null });
    }

    render() {
        const { recettes, ajouterRecette, majRecette, chargerExemple, supprimerRecette } = this.props;

        const logoutButton = <button onClick={this.logout}>Déconnexion</button>;

        // Si l'utilisateur n'est pas connecté
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate} />;
        }

        if (this.state.uid !== this.state.chef) {
            return (
                <div>
                    <p>Tu n'est pas le chef de cette boîte !</p>
                    {logoutButton}
                </div>
            );
        }

        return (
            <div className='cards'>
                <AjouterRecette ajouterRecette={ajouterRecette} />
                {Object.keys(recettes)
                    .map(key => (
                        <AdminForm
                            key={key}
                            id={key}
                            majRecette={majRecette}
                            supprimerRecette={supprimerRecette}
                            recettes={recettes}
                        />)
                    )}
                <footer>
                    {logoutButton}
                    <button onClick={chargerExemple}>Remplir</button>
                </footer>
            </div>
        );
    }
}

export default Admin;

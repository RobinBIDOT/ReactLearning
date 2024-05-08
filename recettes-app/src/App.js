import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./components/Header";
import recettes from "./recettes";
// CSS
import './App.css';
import Admin from "./components/Admin";
import Card from "./components/Card";
// Firebase
import { getDatabase, ref, onValue, off, set } from "firebase/database";
import {base} from "./base";

function AppWrapper() {
    let { pseudo } = useParams();
    return <App pseudo={pseudo} />;
}



class App extends Component {

    state = {
        pseudo: this.props.pseudo,
        recettes: {}
    }


    componentDidMount() {
        const db = getDatabase();
        const recettesRef = ref(db, `/${this.state.pseudo}/recettes`);

        this.recettesListener = onValue(recettesRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                this.setState({ recettes: data });
                console.log("Données récupérées depuis Firebase:", data);
            } else {
                console.log("Aucune donnée trouvée à ce chemin, initialisation des données.");
                this.initialiserRecettes(recettesRef);
            }
        }, (error) => {
            console.error("Erreur de récupération des données Firebase:", error);
        });
    }

    initialiserRecettes(recettesRef) {
        set(recettesRef, recettes).then(() => {
            console.log("Recettes par défaut ajoutées avec succès.");
            this.setState({ recettes });
        }).catch((error) => {
            console.error("Erreur lors de l'ajout des recettes par défaut:", error);
        });
    }

    componentWillUnmount() {
        const db = getDatabase();
        const recettesRef = ref(db, `/${this.state.pseudo}/recettes`);
        off(recettesRef, 'value', this.recettesListener);
    }

    ajouterRecette = recette => {
        // Copie de l'état actuel des recettes
        const recettes = { ...this.state.recettes };

        // Ajout de la nouvelle recette avec une clé unique basée sur le timestamp
        recettes[`recette-${Date.now()}`] = recette;

        // Mise à jour de l'état avec les nouvelles recettes
        this.setState({ recettes });

        // Optionnellement, mettre à jour les données dans Firebase
        const db = getDatabase();
        const recettesRef = ref(db, `/${this.state.pseudo}/recettes`);
        set(recettesRef, recettes).catch((error) => {
            console.error("Erreur lors de la mise à jour des recettes dans Firebase:", error);
        });
    }

    majRecette = (key, newRecette) => {
        const recettes = { ... this.state.recettes }
        recettes[key] = newRecette
        this.setState({ recettes })
    }

    supprimerRecette = key => {
        const recettes = { ... this.state.recettes }
        recettes[key] = null
        this.setState({ recettes })
    }

    chargerExemple = () => this.setState({recettes})

        render() {
        const cards = Object.keys(this.state.recettes)
            .map(key => <Card key={key} details={this.state.recettes[key]}></Card>)
        const { pseudo } = this.props;
        return (
            <div className='box'>
                <Header pseudo={this.state.pseudo} />
                <div className='cards'>
                    {cards}
                </div>
                <Admin
                    pseudo={this.state.pseudo}
                    recettes={this.state.recettes}
                    ajouterRecette={this.ajouterRecette}
                    majRecette={this.majRecette}
                    supprimerRecette={this.supprimerRecette}
                    chargerExemple={this.chargerExemple} />
            </div>
        );
    }
}

export default AppWrapper;

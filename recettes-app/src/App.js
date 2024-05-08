import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

// CSS
import './App.css';

function AppWrapper() {
    let { pseudo } = useParams();
    return <App pseudo={pseudo} />;
}

class App extends Component {
    render() {
        const { pseudo } = this.props;
        return (
            <div className='box'>
                <h1>Bonjour {pseudo}</h1>
                <div className='cards'>
                    <div className='card'>
                        <h2>Une Carte</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppWrapper;

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Connexion from "./components/Connexion";
import * as serviceWorker from './serviceWorker'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";

const Root = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={Connexion} />
            <Route path='/pseudo/:pseudo' Component={App} />
            <Route Component={NotFound} />
        </Routes>
    </BrowserRouter>
)
createRoot(document.getElementById('root')).render(<Root />);
// ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

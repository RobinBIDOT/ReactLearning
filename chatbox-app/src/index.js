import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import AppWrapper from './components/AppWrapper';
import Connexion from "./components/Connexion";
import * as serviceWorker from './serviceWorker'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";

const Root = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={Connexion} />
            <Route path='/pseudo/:pseudo' element={<AppWrapper />} />
            <Route Component={NotFound} />
        </Routes>
    </BrowserRouter>
)
createRoot(document.getElementById('root')).render(<Root />);


serviceWorker.unregister()

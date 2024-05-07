import React from 'react';
import { useParams } from 'react-router-dom';
import App from '../App';

const AppWrapper = () => {
    const { pseudo } = useParams();
    return <App pseudo={pseudo} />;
}

export default AppWrapper;

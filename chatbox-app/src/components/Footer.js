import React from 'react';
import '../css/Footer.css'; // Importing the CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Formation React JS, Skilleos - Robin BIDOT, web dev</p>
        </footer>
    );
}

export default Footer;

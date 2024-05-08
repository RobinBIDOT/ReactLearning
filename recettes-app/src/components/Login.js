import React from 'react';
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

const Login = ({ authenticate }) => {
    return (
        <div className='login'>
            <h2>Connecte toi pour créer tes recettes !</h2>
            <button onClick={authenticate} className="facebook-button">
                Me connecter avec Facebook
            </button>
        </div>
    );
};

export default Login;
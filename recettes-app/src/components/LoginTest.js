import React, {useState} from 'react';
import {LoginSocialFacebook} from "reactjs-social-login";
import {FacebookLoginButton} from "react-social-login-buttons";

const LoginTest = () => {
    const [profile, setProfile] = useState(null);
    return (
        <div>
            {!profile ?
            <LoginSocialFacebook
                appId="337693825661532"
                onResolve={(response) => {
                    console.log(response);
                }}
                onReject={(error) => {
                    console.log(error);
                }}
            >
                <FacebookLoginButton />
            </LoginSocialFacebook> : ''}
            {profile ? <div>
                <h1>{profile.name}</h1>.
                <img src={profile.picture.data.url} alt=""/>
            </div> : ''}
        </div>
    );
};

export default LoginTest;
import { TextField, Button, Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import Navber from '../Navber/Navber';
import './Login.css'
import facebook from "../../images/fb.png";
import google from "../../images/google.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const [newUser, setNewUser] = useState(false)
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                var errorCode = err.code;
                var errorMessage = err.message;
                console.log(errorCode, errorMessage);

            });
    }

    return (

        <div>

            <div className="login-container">
                {newUser ?

                    <div className="login-field">
                        <h3>Login</h3>
                        <TextField className="text" id="standard-basic" label="First Name" />
                        <br />
                        <TextField className="text" id="standard-basic" label="Last Name" />
                        <br />
                        <div className="remember">
                            <div>
                                <Checkbox className="checkbox"
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />Remember me
                            </div>
                            <div className="forget-password">
                                <p>Forgot password</p>
                            </div>
                        </div>
                        <Button className="btn" variant="contained" color="secondary">Login</Button>

                        <p>Don't have an account? <a href="#login" onClick={() => setNewUser(!newUser)}>Create an account</a></p>
                    </div>
                    :

                    <div className="login-field">
                        <h3>Create an account</h3>
                        <TextField className="text" id="standard-basic" label="First Name" />
                        <br />
                        <TextField className="text" id="standard-basic" label="Last Name" />
                        <br />
                        <TextField className="text" id="standard-basic" label="User or Email" />
                        <br />
                        <TextField className="text" id="standard-basic" label="Password" />
                        <br />
                        <TextField className="text" id="standard-basic" label="Confirm Password" />
                        <br />
                        <Button className="btn" variant="contained" color="secondary">Create an account</Button>
                        <p>Already have an account? <a href="#login" onClick={() => setNewUser(!newUser)}>Login</a> </p>
                    </div>

                }
            </div>
                <p className="login-or"><div></div><span>Or</span><div></div></p>
                <div className="login-with">
                    <img className="login-image" src={facebook} alt="Facebook" />
                    <p>Login with Facebook</p>
                    <div></div>
                </div>
                <div className="login-with">
                    <img className="login-image" src={google} alt="Facebook" />
                    <button onClick={handleGoogleSignIn}><p>Login with Google</p></button>
                    <div></div>
                </div>

        </div>
    );
};

export default Login;
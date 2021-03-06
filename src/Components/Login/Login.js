import { TextField, Button, Checkbox } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Navber from '../Navber/Navber';
import './Login.css'
import facebook from "../../images/fb.png";
import google from "../../images/google.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { travelContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/Logo.png'

const Login = () => {
    const [travelInformation, setTravelInformation] = useContext(travelContext);
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    

    const handleSignOut = () => {
        firebase.auth().signOut().then(function () {
            setTravelInformation({
                ...travelInformation,
                isSignedIn: false,
                displayName: ""
            });
        }).catch(function (error) {
            console.log(error)
        });
    }
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [user, setUser] = useState({
        isSignedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: ''
    })

    const [newUser, setNewUser] = useState(false)
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = (e) => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const {displayName, email} = result.user;
                const signInUser = {
                    name: displayName,
                    email
                }
                setTravelInformation(signInUser)
                history.replace(from)
               
               
            })
            
            .catch(err => {
                var errorCode = err.code;
                var errorMessage = err.message;
                console.log(errorCode, errorMessage);

            });
            
        e.preventDefault();
    }

    const handleFbSignIn = () => {

        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("Fb user after sign in", user);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }



    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
        let isFieldValid = true;
        if (e.target.name === 'email') {

            isFieldValid = /(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value);

        }

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 8;
            const passwordHasNumber = /\d/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }


        if (e.target.name === 'confirmPassword') {
            const isPasswordValid = e.target.value.length > 8;
            const passwordHasNumber = /\d/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        console.log(user.email && user.password);

        if (user.email && user.password) {
            console.log('Submitting');
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((user) => {

                    const userName = user.displayName;
                    setTravelInformation({
                        ...travelInformation,
                        isSignedIn: true,
                        displayName: userName,
                    })
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });
        }
        e.preventDefault();
    }


    return (

        <div>
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>

                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contracts">Contracts</Link>
                    </li>
                    {
                        travelInformation.isSignedIn ?
                            <li>
                                <Link to="/login">
                                    <button onClick={handleSignOut} className="btn-login">Log Out</button>
                                </Link>

                            </li>
                            :
                            <li>
                                <Link to="/login">
                                    <button className="btn-login">Login</button>
                                </Link>
                            </li>
                    }
                    <li className="nav-item nav-person">{travelInformation.displayName}</li>
                </ul>
            </nav>

            <div className="login-container">


                <form onSubmit={handleSubmit}>
                    {newUser ?
                        <div className="login-field">
                            <h3>Login</h3>
                            <TextField className="text" name="email" onBlur={handleBlur} id="standard-basic" type="email" label="User or Email" required />
                            <br />
                            <TextField className="text" name="password" onBlur={handleBlur} id="standard-basic" type="password" label="Password" required />
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
                            <input type="submit" value="LOGIN" className="btn" color="secondary" />
                            <p>Don't have an account? <a href="#login" onClick={() => setNewUser(!newUser)}>Create an account</a></p>
                        </div>
                        :

                        <div className="login-field">
                            <h3>Create an account</h3>
                            <TextField className="text" name="firstName" onBlur={handleBlur} id="standard-basic" type="name" label="First Name" required />
                            <br />
                            <TextField className="text" name="lastName" onBlur={handleBlur} id="standard-basic" type="name" label="Last Name" required />
                            <br />
                            <TextField className="text" name="email" onBlur={handleBlur} id="standard-basic" type="email" label="User or Email" required />
                            <br />
                            <TextField className="text" name="password" onBlur={handleBlur} id="standard-basic" type="password" label="Password" required />
                            <br />
                            <TextField className="text" name="confirmPassword" onBlur={handleBlur} id="standard-basic" type="password" label="Confirm Password" required />
                            <br />
                            <input type="submit" value="CREATE AN ACCOUNT" className="btn" color="secondary" />
                            <p>Already have an account? <a href="#login" onClick={() => setNewUser(!newUser)}>Login</a> </p>
                        </div>
                    }
                </form>


            </div>
            <p className="login-or"><div></div><span>Or</span><div></div></p>
            <div className="login-with" onClick={handleFbSignIn}>
                <img className="login-image" src={facebook} alt="Facebook" />

                <p>Login with Facebook</p>
                <div></div>
            </div>
            <div className="login-with" onClick={handleGoogleSignIn}>
                <img className="login-image" src={google} alt="Facebook" />
                <p>Login with Google</p>
                <div></div>
            </div>


        </div>
    );
};

export default Login;
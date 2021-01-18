import React, { useContext } from 'react';
import './Navber.css'
import header from '../../images/header.jpg';
import logo from '../../images/Logo.png'
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { travelContext } from '../../App';
import { Button } from 'bootstrap';
import firebase from "firebase/app";
import "firebase/auth";

const Navber = () => {
    const [travelInformation, setTravelInformation] = useContext(travelContext);
    console.log(travelInformation);
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
    return (
        <Container>
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
                <nav className="nav">
                    <ul>
                        <li>
                            <img className="logo" src={logo} alt="" />
                        </li>
                        <li>
                            <input className="search" type="search" name="" id="" placeholder="Search Your Destination" />
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
            </div>
        </Container>
    );
};

export default Navber;
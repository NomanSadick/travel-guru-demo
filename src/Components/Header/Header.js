import React, { useContext } from 'react';
import './Header.css';
import header from '../../images/header.jpg';

import { Link } from "react-router-dom";

import logo from '../../images/Logo.png'
// import { Link } from '@material-ui/core';
import Container from 'react-bootstrap/Container'
import { Carousel, Col, Row, } from 'react-bootstrap';
import travelLocation from '../../fakeData/travelLocation'

import { travelContext } from '../../App';


const Header = () => {
    const [travelInformation, setTravelInformation] = useContext(travelContext)
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
                        <li>
                            <Link to="/login">
                                <button className="btn-login">Login</button>

                            </Link>

                        </li>
                    </ul>
                </nav>

                <Carousel className="carousel">
                    {travelLocation.map(item =>
                        <Carousel.Item clasName="carousel-item" key={item.id}>

                            <Row>

                                <Col>
                                    <Carousel.Caption clasName="caption">
                                        <h4 clasName="name">{item.name}</h4>
                                        <p clasName="detail">{item.detail}</p>

                                    </Carousel.Caption>
                                    <br />
                                    <Link onClick={() => setTravelInformation(item)} to={'/details/' + item.id}>
                                        <button className="btn-booking">Booking</button>
                                    </Link>
                                </Col>

                                <Col>

                                    <div>
                                        <img clssName="slider-img" src={item.image} fluid alt="" />
                                    </div>

                                </Col>

                            </Row>
                        </Carousel.Item>
                    )}

                </Carousel>


            </div>
        </Container>

    );
};

export default Header;

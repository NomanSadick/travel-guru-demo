import React from 'react';
import './Header.css';
import header from '../../images/header.jpg';



import coxs from '../../images/Coxs-bazar.png'
import sundorbans from '../../images/sundorbans.png'
import sremangal from '../../images/Sremangal.png'

import logo from '../../images/Logo.png'
import { Link } from '@material-ui/core';
import Container from 'react-bootstrap/Container'
import { Button, Carousel, Col, Row, Grid } from 'react-bootstrap';



const Header = () => {
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

                <Carousel className="bg-color">
                    <Carousel.Item>
                        
                        <Row>

                            <Col md={4}>
                                <div>
                                
                                    <h4 className="title">COX'S BAZER</h4>
                                    <p className="header-content">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                                    <button className="btn-booking">Booking</button>
                                
                                </div>
                            </Col>

                            <Col md={8}>
                                <div>
                                <img clssName="slider-img" src={coxs} fluid alt="" />
                                <h2 clasName="right-title">COX'S BAZER</h2>
                                </div>
                            </Col>

                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={4}>
                                <h2 className="title">SUNDORBANS</h2>
                                <p className="header-content">I'm getting this error I have created a new project using npx-create-react-app and then followed the instructions written down here</p>
                                <button className="btn-booking">Booking</button>
                            </Col>
                            <Col md={8}>
                                <img clssName="slider-img" src={sundorbans} fluid alt="" />
                                <h2>Sundorbans</h2>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={4}>
                                <h2 className="title">SREMANGAL</h2>
                                <p className="header-content">I'm getting this error I have created a new project using npx-create-react-app and then followed the instructions written down here</p>
                                <button className="btn-booking">Booking</button>
                            </Col>
                            <Col md={8}>
                                <img clssName="slider-img" src={sremangal} fluid alt="" />
                                <h2>Sremangalr</h2>
                            </Col>
                        </Row>
                        
                    </Carousel.Item>
                </Carousel>

               
            </div>
        </Container>

    );
};

export default Header;

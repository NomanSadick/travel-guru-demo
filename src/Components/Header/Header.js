import React, { useContext } from 'react';
import './Header.css';


import { Link } from "react-router-dom";


// import { Link } from '@material-ui/core';
import Container from 'react-bootstrap/Container'
import { Carousel, Col, Row, } from 'react-bootstrap';
import travelLocation from '../../fakeData/travelLocation'

import { travelContext } from '../../App';
import Navber from '../Navber/Navber';


const Header = () => {
    const [travelInformation, setTravelInformation] = useContext(travelContext)
    return (

        <Container>
            <div>

                <Navber></Navber>

                <Carousel className="carousel">
                    {travelLocation.map(item =>
                        <Carousel.Item clasName="carousel-item" key={item.id}>

                            <Row>

                                <Col md={8}>
                                    <Carousel.Caption clasName="caption">
                                        <h2 clasName="name">{item.name}</h2>
                                        <p clasName="detail">{item.detail}</p>

                                    </Carousel.Caption>

                                    <Link onClick={() => setTravelInformation(item)} to={'/details/' + item.id}>
                                        <button className="btn-booking">Booking</button>
                                    </Link>
                                </Col>

                                <Col md={4}>

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

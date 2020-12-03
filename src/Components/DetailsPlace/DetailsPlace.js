import React, { useContext } from 'react';
import './DetailsPlace.css'
import { useParams } from 'react-router-dom';
import { travelContext } from '../../App';
import Navber from '../Navber/Navber';
import { Container } from 'react-bootstrap';
import travelLocation from '../../fakeData/travelLocation'
import { TextField } from '@material-ui/core';

const DetailsPlace = () => {
    const [travelInformation, setTravelInformation] = useContext(travelContext);
    const { id } = useParams();
    const items = travelLocation.find(item => item.id === id)

    setTravelInformation(items);

    console.log(items);

    return (
        <Container>
            <Navber></Navber>
            <div className="details-place">

                <div>
                    <h2 className="name">{items.name}</h2>
                    <p className="details">{items.detail}</p>
                </div>
                <div className="detail-form">
                    <form action="">
                        <label className="detail-form__label">Origin</label>
                        <input className="detail-form__input" type="text" name="from-travel" id="from-travel" />
                        <label className="detail-form__label">Destination</label>
                        <input className="detail-form__input" value={items.name} type="text" name="from-travel" id="from-travel" />
                        <div className="detail-calender">
                            <div className="calender-segment">
                                <TextField id="date" label="From" type="date" className="detail-form__input calender-main"
                                    defaultValue="2020-12-05" InputLabelProps={{ shrink: true, }} />
                            </div>
                            <div className="calender-segment">
                                <TextField id="date" label="To" type="date" className="detail-form__input calender-main"
                                    defaultValue="2020-12-10" InputLabelProps={{ shrink: true, }} />
                            </div>
                        </div>
                        <button className="detail-btn">Start Booking</button>
                    </form>
                </div>


            </div>
        </Container>
    );
};

export default DetailsPlace;
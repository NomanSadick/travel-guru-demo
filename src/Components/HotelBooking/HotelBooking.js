import React from 'react';
import './HotelBooking.css'
import hotelBooking from '../../fakeData/hotelBooking'

const HotelBooking = () => {
    return (
        
        <div className="container">
            <p><small>252 stays Apr 13-17 3 guests</small></p>
            <br />
            <h4>Stay in Cox’s Bazar(dynamic)</h4>
            {
                hotelBooking.map(items =>


                    <div className="booking">

                        <div>
                            <img src={items.image} alt="" />
                        </div>
                        <div className="booking-content">
                            <h6>{items.name}</h6>
                            <p>{items.limt}</p>
                            <p>{items.facility}</p>
                            <p>{items.stock}</p>
                            <p>{items.quantity}</p>
                        </div>
                    </div>

                )}


        </div>
    );
};

export default HotelBooking;
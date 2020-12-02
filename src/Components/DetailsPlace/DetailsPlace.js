import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { travelContext } from '../../App';


const DetailsPlace = () => {
    const [travelInformation, setTravelInformation] = useContext(travelContext)
    console.log(travelInformation);
    const { id } = useParams();

    return (

        <div >
            <h1>This is details place{id}</h1>
            <p>{travelInformation.name}</p>
            <p>{travelInformation.detail}</p>
        </div>
    );
};

export default DetailsPlace;
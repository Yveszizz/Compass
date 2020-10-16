import React from 'react';
import compassPositionLogo from './compass.svg'

function Locate({ panTo }) {
    return (
        <button className="locate" onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                 () => null
                 );
        }} >
            <img src={compassPositionLogo} alt="compass - locate me" />
        </button>
    )
}
export default Locate;
import React, {Component} from 'react';
import './Map.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import SearchPos from './Search/SearchPos';

const MapContainer = (props) => {
    
    const onMarkerClicke = (e) => {
        console.log(e);
    }
    
    const addMarker = () => {
        new Marker ()
    }
    
    return (
        <Map google={props.google} zoom={14} className="map"
        initialCenter={{ lat:48.866667, lng:  2.333333}}
        onClick={addMarker}>
        
        <Marker onClick={onMarkerClicke}
                position={{lat:48.866667, lng:  2.333333}}
                name='Paris' 
                draggable={true}
                
                 />
        <InfoWindow onClose={props.onInfoWindowClose}>
            <div>
              <h1>"ok"</h1>
            </div>
        </InfoWindow>
      </Map>
    )
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer)

            /*<div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>*/
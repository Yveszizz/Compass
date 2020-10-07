import React, {Component} from 'react';
import './Map.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import SearchPos from './Search/SearchPos';
import { GoogleMapsAPI } from '../client-config';

class MapContainer extends Component {
    state = {
        markers: [],
    }
    
    onMarkerClicke = (e) => {
        console.log(e);
    }
    
    addMarker = (e) => {
        console.log(e);
    }
    
    render() {
        
        const center = {
            lat: 48.866667,
            lng: 2.333333
        }
        
        return (
            <Map 
                google={this.props.google}
                zoom={8} 
                className="map"
                initialCenter={center}
                onClick={this.addMarker} >
          </Map>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: GoogleMapsAPI;
})(MapContainer)



            /*<div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>*/
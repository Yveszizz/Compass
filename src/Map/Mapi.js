import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindows, } from '@react-google-maps/api';
import { formatRelative } from "date-fns";

const libraries = ["places"];
const mapContainerStyle = {
    width:'99vw',
    height:'100vh',
};
const center = {
            lat: 48.866667,
            lng: 2.333333,
        }
 
export default function Mapi(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyAfxtvx4AVwE5IuSH57EtkpW3CtGwMCtW4',
        libraries,
    });
    
    const [markers, setMarkers] = React.useState([]);
    
    const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);
    
    if (loadError) return "Error Loading maps"
    if (!isLoaded) return "Loading maps"
    
    return (
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={8} 
                center={center}
                onClick={onMapClick}
            >
                {markers.map(marker => 
                    <Marker 
                        key={marker.time.toISOString()} 
                        position={{ lat: marker.lat, lng: marker.lng }}>
                    </Marker>
                )} 
            </GoogleMap>
        </div>
    )
}
import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from '@react-google-maps/api';
import { formatRelative } from "date-fns";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const libraries = ["places"];
const mapContainerStyle = {
    width:'100vw',
    height:'88vh',
};
const center = {
            lat: 48.866667,
            lng: 2.333333,
        }
const styleInfoWindows = {
    color:'black',
}
 
export default function Mapi(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: '',
        libraries,
    });
    
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null)
    
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
    
    const onMarkerClick = (marker) => {
        //marker = markers
        console.log(marker);
        setSelected(marker);
    }
    
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map)=> {
        mapRef.current = map
    }, []);
    
    if (loadError) return "Error Loading maps"
    if (!isLoaded) return "Loading maps"
    
    return (
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={14} 
                center={center}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers.map(marker => 
                    <Marker
                        onClick={()=>{setSelected(marker)}}
                        key={marker.time.toISOString()} 
                        position={{ lat: marker.lat, lng: marker.lng }}>
                    </Marker>
                )} 
                {selected ? (
                    <InfoWindow 
                        position={{lat:selected.lat, lng:selected.lng}} 
                        onCloseClick={()=>{setSelected(null)}}
                         >
                        <div style={styleInfoWindows}>
                            <h2>Spot</h2>
                            <p>Spotted {formatRelative(selected.time, new Date())}</p>
                        </div>
                    </InfoWindow>
                ): null}
            </GoogleMap>
        </div>
    )
}
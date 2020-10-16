import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from '@react-google-maps/api';
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import SearchPos1 from './Search/SearchPos1'
import Locate from './Locate/Locate'

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
 
export default function Mapi() {
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
        setSelected(marker);
    }
    
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map)=> {
        mapRef.current = map
    }, []);
    
    const panTo = React.useCallback(({ lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(15);
    },[])

    const openModal = () => {
        console.log('modal')
        //modal.style.display = "none";
    }

    if (loadError) return "Error Loading maps"
    if (!isLoaded) return "Loading maps"
    
    return (
        <div>
            <SearchPos1 panTo={panTo} />
            <Locate panTo={panTo} />
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={14} 
                center={center}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                <div className="modal" >
                    <div className="modal-content">
                        <span className="close">&times;</span>
                    </div>
                </div>

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
                        <div 
                            style={styleInfoWindows}
                            onClick={openModal}
                        >
                            <h2>Spot</h2>
                            <p>Spotted {formatRelative(selected.time, new Date())}</p>
                        </div>
                    </InfoWindow>
                ): null}
            </GoogleMap>
        </div>
    )
}
import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import SearchPos from './Map/Search/SearchPos';
//import Map from './Map/Map';
import Mapi from './Map/Mapi';
//import PlacesAutocomplete from './Map/Search/SearchPos1'
//import Search from './Map/Search/SearchPos1'

class App extends Component {
    
    render() {
        return (
        <div>
            <Header />
            {/*<Search /> */}
            <Mapi />
        </div>
        )
    }
}

export default App; 
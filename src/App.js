import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import SearchPos from './Map/Search/SearchPos';

class App extends Component {
    
    render() {
        return (
        <div>
            <Header />
            <Map
                google={this.props.google}
                zoom={8}
                //style={mapStyles}
                initialCenter={{ lat:48.866667, lng:  2.333333}} />
            <SearchPos />
            <p>ok</p>
        </div>
        )
    }
}

//export default App;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC6m8Va82Icxm9OlLnlAGRP6iBmMSlZnaE'
})(App);
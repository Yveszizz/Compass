import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
    
    render() {
        return (
        <div>
            <Header />
            <Map
              google={this.props.google}
              zoom={8}
              //style={mapStyles}
              //initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        </div>
        )
    }
}

//export default App;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC6m8Va82Icxm9OlLnlAGRP6iBmMSlZnaE'
})(App);
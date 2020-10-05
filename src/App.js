import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import Map from './Map/Map';

class App extends Component {
    
    render() {
        return (
        <div>
            <Header />
            <Map />
        </div>
        )
    }
}

//export default App;

/*export default GoogleApiWrapper({
  apiKey: 'AIzaSyAfxtvx4AVwE5IuSH57EtkpW3CtGwMCtW4'
})(App);*/

export default App;

/*<Map
                google={this.props.google}
                zoom={8}
                //style={mapStyles}
                initialCenter={{ lat:48.866667, lng:  2.333333}} />
            <SearchPos />*/
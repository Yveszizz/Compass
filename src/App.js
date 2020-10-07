import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import Map from './Map/Map';
import Mapi from './Map/Mapi';

class App extends Component {
    
    render() {
        return (
        <div>
            <Header />
            <Mapi />
        </div>
        )
    }
}

export default App;
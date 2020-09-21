import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Compass</h1>
      </header>
    </div>
  );
}

export default Header;

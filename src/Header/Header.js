import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Compass</h1>
      </header>
  );
}

export default Header;

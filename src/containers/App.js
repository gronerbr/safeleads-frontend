import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from '../components/Example/Example'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello React World</h1>
        </header>
        <Example />
      </div>
    );
  }
}

export default App;

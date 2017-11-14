import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Example from '../../components/Example/Example';
import Counter from '../Counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App" ref={1}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello React World</h1>
        </header>
        <Example />
        <Counter />
      </div>
    );
  }
}

export default App;

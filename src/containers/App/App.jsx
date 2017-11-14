import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.scss';
import Example from '../../components/Example/Example';
import Counter from '../Counter/Counter';

class App extends Component {
  render() {
    return (
      <div className={style.App} ref={1}>
        <header className={style['App-header']}>
          <img src={logo} className={style['App-logo']} alt="logo" />
          <h1 className={style['App-title']}>Hello React World</h1>
        </header>
        <Example />
        <Counter />
      </div>
    );
  }
}

export default App;

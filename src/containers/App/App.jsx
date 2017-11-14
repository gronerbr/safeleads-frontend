import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import style from './App.scss';
import Routes from '../Routes/Routes';

class App extends Component {
  render() {
    return (
      <div className={style.App} ref={1}>
        <header className={style['App-header']}>
          <img src={logo} className={style['App-logo']} alt="logo" />
          <h1 className={style['App-title']}>Hello React World</h1>
        </header>
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default App;

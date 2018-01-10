import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import style from './App.scss';
import Routes from '../Routes/Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // eslint-disable-next-line
    console.log('componentDidCatch info ', info);
    // eslint-disable-next-line
    console.log('componentDidCatch error ', error);
    // You can also log the error to an error reporting service (GA or other)
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // eslint-disable-next-line
      console.error('THERE\'S AN ERROR IN APPLICATION, PLEASE FIX IT!');
    }

    return (
      <div className={style.App} ref={1}>
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

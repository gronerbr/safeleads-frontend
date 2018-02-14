import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import style from './App.scss';
import Routes from '../Routes/Routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#d05ce3',
      main: '#9c27b0',
      dark: '#6a0080',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6effff',
      main: '#00e5ff',
      dark: '#00b2cc',
      contrastText: '#000',
    },
  },
});

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
          <MuiThemeProvider theme={theme}>
            <Routes />
          </MuiThemeProvider>
        </main>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default App;

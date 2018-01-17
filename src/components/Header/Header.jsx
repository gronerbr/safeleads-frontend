import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import logo from '../../img/logo-inline.png';

class Header extends Component {
  static propTypes = {
    onToggleMenu: PropTypes.func,
  }

  static defaultProps = {
    onToggleMenu: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.base}>
          <Icon className="material-icons" onClick={() => this.props.onToggleMenu()}>menu</Icon>
          <Link to="/">
            <img src={logo} className={styles.logo} alt="Logo Safe Leads" />
          </Link>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Header;

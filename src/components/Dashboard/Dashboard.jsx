/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styles from './Dashboard.scss';

class Dashboard extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Redirect to="/login" />
    );
  }
}

export default Dashboard;

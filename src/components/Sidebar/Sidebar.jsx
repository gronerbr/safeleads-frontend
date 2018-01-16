/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import styles from './Sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.base}>
        <ul className={styles.defaultUl}>
          <li>
            <Icon>home</Icon>
            <span className={styles.itemName}>Dashboard</span>
          </li>
        </ul>
        <h1 className={styles.sectionTitle}>GERAL</h1>
        <ul className={styles.defaultUl}>
          <li>
            <Icon>layers</Icon>
            <span className={styles.itemName}>Catálogo</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;

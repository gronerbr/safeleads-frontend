/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.scss';
import MasterPage from '../MasterPage/MasterPage';

class ProductList extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MasterPage>
        <div className={styles.base}>
          <h1>product list</h1>
        </div>
      </MasterPage>
    );
  }
}

export default ProductList;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <Fragment>
    <h1>Total: {props.total}</h1>
    <button onClick={() => props.increment()}>Incrementar</button>
    <button onClick={() => props.decrement()}>Decrementar</button>
    <button onClick={() => props.decrementAsync()}>Decrementar assíncronamente</button>
  </Fragment>
);

Counter.defaultProps = {
  total: 0,
};

Counter.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  total: PropTypes.number,
};

export default Counter;

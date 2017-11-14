import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <div>
    <h1>Total: {props.total}</h1>
    <button onClick={() => props.increment()}>Incrementar</button>
    <button onClick={() => props.decrement()}>Decrementar</button>
    <button onClick={() => props.decrementAsync()}>Decrementar assíncronamente</button>
  </div>
);

Counter.defaultProps = {
  increment: () => {},
  decrement: () => {},
  decrementAsync: () => {},
  total: 0,
};

Counter.propTypes = {
  decrement: PropTypes.func,
  increment: PropTypes.func,
  decrementAsync: PropTypes.func,
  total: PropTypes.number,
};

export default Counter;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Login = props => (
  <Fragment>
    <h1>Total: {props.total}</h1>
    <form>
      <input type="text" />
    </form>
  </Fragment>
);

Login.defaultProps = {
  total: 0,
};

Login.propTypes = {
  total: PropTypes.number,
};

export default Login;

import React, { Fragment } from 'react';
import styles from './login.scss';
import logo from '../../img/logo.png';

const Login = () => (
  <Fragment>
    <div className={styles.login}>
      <img src={logo} className={styles.logo} alt="logo safe leads" />
      <form className={styles.login__form}>
        <input type="text" />
        <hr />
        <input type="password" />
        <button className={styles.login__button}>Login</button>
      </form>
    </div>
  </Fragment>
);

export default Login;

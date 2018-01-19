/* eslint-disable */
import React, { Fragment } from 'react';
import FontAwesome from 'react-fontawesome';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { Link } from 'react-router-dom';
import styles from './login.scss';
import logo from '../../img/logo.png';

const Login = () => (
  <div className={styles.bg}>
    <div className={styles.card}>
      <div className={styles.login}>
        <img src={logo} className={styles.logo} alt="logo safe leads" />
        <form className={styles.login__form}>
          <div className={styles.inputWrapper}>
            <div className={styles.icon}>
              <Icon className="material-icons">person_outline</Icon>
            </div>
            <TextField
              placeholder="Digite seu login"
              label="Usuário"
              type="text"
              margin="normal"
            />
            <br/>
            <div className={styles.icon}>
              <Icon className='material-icons'>lock_outline</Icon>
            </div>
            <TextField
              placeholder="Digite sua senha"
              label="Senha"
              type="password"
              margin="normal"
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Link to="/produtos">
              <Button
                raised
                className={styles.button}
              >
                LOGIN
              </Button>
            </Link>
          </div>
          <a className={styles.forgotten} href="#">Esqueci minha senha</a>
        </form>
      </div>
    </div>
  </div>
);

export default Login;

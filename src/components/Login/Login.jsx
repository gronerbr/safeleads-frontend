/* eslint-disable */
import React, { Fragment } from 'react';
import FontAwesome from 'react-fontawesome';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import styles from './login.scss';
import logo from '../../img/logo.png';

const Login = () => (
  <div className={styles.bg}>
    <div className={styles.card}>
      <MuiThemeProvider>
        <div className={styles.login}>
          <img src={logo} className={styles.logo} alt="logo safe leads" />
          <form className={styles.login__form}>
            <div className={styles.inputWrapper}>
              <div className={styles.icon}>
                <FontIcon className="material-icons">person_outline</FontIcon>
              </div>
              <TextField
                floatingLabelFocusStyle={{color: '#9202d3'}}
                hintText="Digite seu login"
                floatingLabelText="Usuário"
              />
              <br/>
              <div className={styles.icon}>
                <FontIcon className='material-icons'>lock_outline</FontIcon>
              </div>
              <TextField
                floatingLabelFocusStyle={{color: '#9202d3'}}
                hintText="Digite sua senha"
                floatingLabelText="Senha"
                type="password"
              />
            </div>
            <div className={styles.enterBtn}>
              <FlatButton
                label="LOGIN"
                backgroundColor="#9202d3"
                hoverColor="#7800af"
              />
            </div>
            <a className={styles.forgotten} href="#">Esqueci minha senha</a>
          </form>
        </div>
      </MuiThemeProvider>
    </div>
  </div>
);

export default Login;

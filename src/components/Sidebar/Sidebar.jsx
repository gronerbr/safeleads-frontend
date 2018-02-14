import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'material-ui/Icon';
import styles from './Sidebar.scss';

class Sidebar extends Component {
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
          <li className={styles.active}>
            <Icon>layers</Icon>
            <span className={styles.itemName}>Catálogo</span>
          </li>
        </ul>
        <ul className={styles.internalUl}>
          <li className={styles.active}><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/categorias">Categorias</Link></li>
        </ul>
        <ul className={styles.defaultUl}>
          <li className={styles.bordered}>
            <Icon>extension</Icon>
            <span className={styles.itemName}>Integrações</span>
          </li>
        </ul>
        <ul className={styles.defaultUl}>
          <li className={styles.bordered}>
            <Icon>trending_up</Icon>
            <span className={styles.itemName}>Campanhas</span>
          </li>
        </ul>
        <ul className={styles.defaultUl}>
          <li className={styles.bordered}>
            <Icon>description</Icon>
            <span className={styles.itemName}>Relatórios</span>
          </li>
        </ul>
        <h1 className={styles.sectionTitle}>SISTEMA</h1>
        <ul className={styles.defaultUl}>
          <li>
            <Icon>person_outline</Icon>
            <span className={styles.itemName}>Usuários</span>
          </li>
        </ul>
        <ul className={styles.defaultUl}>
          <li className={styles.bordered}>
            <Icon>brightness_low</Icon>
            <span className={styles.itemName}>Configurações</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;

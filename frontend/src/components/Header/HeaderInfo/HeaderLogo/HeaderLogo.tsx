import React from 'react';
import styles from './headerlogo.module.css';
import Logo from '../../../../assets/images/logo.png';

export function HeaderLogo() {
  return (
    <a className={styles.link} href="/">
      <img className={styles.image} src={Logo} alt="логотип" />
    </a>
  );
}

import React from 'react';
import styles from './headerlogo.module.css';
import LogoImage from '../../../assets/images/logo.png';

export function HeaderLogo() {
  return (
    <a className={styles.link} href="/">
      <img className={styles.image} src={LogoImage} alt="логотип" />
    </a>
  );
}

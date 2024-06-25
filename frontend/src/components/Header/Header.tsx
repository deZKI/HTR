import React from 'react';
import styles from './header.module.css';
import {HeaderInfo} from './HeaderInfo';
import {HeaderNavigation} from './HeaderNavigation';

export function Header() {
  return (
    <header className={styles.container}>
      <HeaderInfo />
      <HeaderNavigation />
    </header>
  );
}

import React from 'react';
import styles from './header.module.css';
import {HeaderLogo} from './HeaderLogo';
import {HeaderSearch} from './HeaderSearch';
import {HeaderButtons} from './HeaderButtons';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <HeaderLogo />
        <HeaderSearch />
        <HeaderButtons />
      </div>
    </header>
  );
}

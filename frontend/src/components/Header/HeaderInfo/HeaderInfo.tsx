import React from 'react';
import styles from './headerinfo.module.css';
import {HeaderLogo} from './HeaderLogo';
import {HeaderSearch} from './HeaderSearch';
import {HeaderButtons} from './HeaderButtons';

export function HeaderInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderButtons />
      </div>
    </div>
  );
}

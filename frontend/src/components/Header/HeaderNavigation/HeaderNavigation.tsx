import React from 'react';
import styles from './headernavigation.module.css';
import {HeaderNavigationList} from './HeaderNavigationList';

export function HeaderNavigation() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <HeaderNavigationList />
      </div>
    </div>
  );
}

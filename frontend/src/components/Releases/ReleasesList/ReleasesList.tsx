import React from 'react';
import styles from './releaseslist.module.css';
import Carchatt from '../../../assets/images/carchatt_release.png';
import NewYorkYankees from '../../../assets/images/new-york-yankees_release.png';
import NewBalance from '../../../assets/images/new-balance_release.png';

export function ReleasesList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <img className={styles.image} src={NewYorkYankees} alt="New Balance" />
      </li>
      <li className={styles.item}>
        <img className={styles.image} src={NewBalance} alt="New&nbsp;York Yankees" />
      </li>
      <li className={styles.item}>
        <img className={styles.image} src={Carchatt} alt="Carchatt" />
      </li>
    </ul>
  );
}

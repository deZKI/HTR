import React from 'react';
import styles from './footer.module.css';
import {FooterInfo} from './FooterInfo';
import {FooterPostScriptum} from './FooterPostScriptum';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <FooterInfo />
        <div className={styles.divider}></div>
        <FooterPostScriptum />
      </div>
    </footer>
  );
}

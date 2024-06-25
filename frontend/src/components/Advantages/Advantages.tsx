import React from 'react';
import styles from './advantages.module.css';
import {Advantageslist} from './AdvantagesList';

export function Advantages() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Наши приемущуства</h3>
        <Advantageslist />
      </div>
    </div>
  );
}

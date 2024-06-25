import React from 'react';
import styles from './advantageslist.module.css';

export function Advantageslist() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.title}>Привозим кепки из китая</span>
        <span className={styles.desc}>Привезли уже &#60; 300</span>
      </li>
      <li className={styles.item}>
        <div className={styles.divider}></div>
      </li>
      <li className={styles.item}>
        <span className={styles.title}>Быстрая доставка</span>
        <span className={styles.desc}>Доставляем быстро или дешёво</span>
      </li>
      <li className={styles.item}>
        <div className={styles.divider}></div>
      </li>
      <li className={styles.item}>
        <span className={styles.title}>Минимальная наценка</span>
        <span className={styles.desc}>Берём оплату только за доставку</span>
      </li>
    </ul>
  );
}

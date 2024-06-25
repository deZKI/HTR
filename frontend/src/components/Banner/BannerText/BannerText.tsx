import React from 'react';
import styles from './bannertext.module.css';

export function BannerText() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Carchatt Лето 2024</h2>
      <p className={styles.desc}>Carchatt Green</p>
      <button className={styles.button}>Купить сейчас</button>
    </div>
  );
}

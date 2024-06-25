import React from 'react';
import styles from './brands.module.css';
import { BrandsList } from './BrandsList';

export function Brands() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Покупайте кепки в магазине HTR - Самые крутые кепки только у нас!</h3>
        <BrandsList />
        <div className={styles.divider}></div>
      </div>
    </div>
  );
}

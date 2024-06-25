import React from 'react';
import styles from './headersearch.module.css';

export function HeaderSearch() {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <input className={styles.input} type="text" placeholder="Поиск" />
      </label>
    </form>
  );
}

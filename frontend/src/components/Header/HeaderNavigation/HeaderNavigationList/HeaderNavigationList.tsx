import React from 'react';
import styles from './headernavigationlist.module.css';

export function HeaderNavigationList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}><a className={styles.link} href="/">Новые поступления</a></li>
      <li className={styles.item}><a className={styles.link} href="/">Бейсболки</a></li>
      <li className={styles.item}><a className={styles.link} href="/">Шапки</a></li>
      <li className={styles.item}><a className={styles.link} href="/">Команды</a></li>
      <li className={styles.item}><a className={styles.link} href="/">Бренды</a></li>
      <li className={styles.item}><a className={styles.link} href="/">Эксклюзивы</a></li>
      <li className={styles.item}><a className={styles.link} href="/">Распродажа</a></li>
    </ul>
  );
}

import React from 'react';
import styles from './categorieslist.module.css';
import AdjustableBaseballcaps from '../../../assets/images/adjustable-baseballcaps_categories.png';
import Snapback from '../../../assets/images/snapback_categories.png';

export function CategoriesList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.desc}>Регулируемые бейсболки</span>
        <span className={styles.image}>
          <img className={styles.image} src={AdjustableBaseballcaps} alt="регулируемые бейсболки" />
        </span>
      </li>
      <li className={styles.item}>
        <span className={styles.desc}>Snapback</span>
        <span className={styles.image}>
          <img className={styles.image} src={Snapback} alt="Snapback" />
        </span>
      </li>
      <li className={styles.item}>
        <span className={styles.desc}>Регулируемые бейсболки</span>
        <span className={styles.image}>
          <img className={styles.image} src={AdjustableBaseballcaps} alt="регулируемые бейсболки" />
        </span>
      </li>
    </ul>
  );
}

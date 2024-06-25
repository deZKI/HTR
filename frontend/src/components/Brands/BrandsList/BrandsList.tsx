import React from 'react';
import styles from './brandslist.module.css';
import Brand from '../../../assets/images/logo.png';

export function BrandsList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href="/">
          <img className={styles.image} src={Brand} alt="бренд" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="/">
          <img className={styles.image} src={Brand} alt="бренд" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="/">
          <img className={styles.image} src={Brand} alt="бренд" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="/">
          <img className={styles.image} src={Brand} alt="бренд" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="/">
          <img className={styles.image} src={Brand} alt="бренд" />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="/">
          <img className={styles.image} src={Brand} alt="" />
        </a>
      </li>
      <li className={styles.item}>
        <button className={styles.button}>
          <span className={styles.desc}>Другие бренды</span>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0V20" stroke="white"/>
              <path d="M0 10H20" stroke="white"/>
            </svg>
          </span>
        </button>
      </li>
    </ul>
  );
}

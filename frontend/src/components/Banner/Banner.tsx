import React from 'react';
import styles from './banner.module.css';
import {BannerText} from './BannerText';
import {BannerImage} from './BannerImage';

export function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <BannerText />
        <BannerImage />
      </div>
    </div>
  );
}

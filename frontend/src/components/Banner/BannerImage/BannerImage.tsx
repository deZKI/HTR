import React from 'react';
import styles from './bannerimage.module.css';
import Banner from '../../../assets/images/banner.png';

export function BannerImage() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Banner} alt="баннер" />
    </div>
  );
}

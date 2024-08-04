import React from 'react';
import './banner.css';
import BannerInfo from './BannerInfo/BannerInfo';
import BannerContent from './BannerContent/BannerContent';

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <BannerInfo />
        <BannerContent />
      </div>
    </div>
  );
}

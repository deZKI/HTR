import React from 'react';
import './bannercontent.css';
import BannerImage from '../../../assets/images/banner.png';

export default function BannerContent() {
  return (
    <div className="banner__content">
      <img className="banner__content__image" src={BannerImage} alt="баннер" />
    </div>
  );
}

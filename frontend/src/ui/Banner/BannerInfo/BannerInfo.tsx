import React from 'react';
import './bannerinfo.css';

export default function BannerInfo() {
  return (
    <div className="banner__info">
      <div className="banner__info__content">
        <h2 className="banner__info__content__title">Carchatt Лето 2024</h2>
        <p className="banner__info__content__desc">Carchatt Green</p>
      </div>
      <button className="banner__info__button">Купить сейчас</button>
    </div>
  );
}

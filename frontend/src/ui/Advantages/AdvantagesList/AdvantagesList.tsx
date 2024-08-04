import React from 'react';
import './advantageslist.css';

export default function Advantageslist() {
  return (
    <ul className="advantages__list">
      <li className="advantages__item">
        <span className="advantages__item__title">Привозим кепки из китая</span>
        <span className="advantages__item__desc">Привезли уже &#60; 300</span>
      </li>
      <li className="advantages__item">
        <div className="advantages__item__divider"></div>
      </li>
      <li className="advantages__item">
        <span className="advantages__item__title">Быстрая доставка</span>
        <span className="advantages__item__desc">Доставляем быстро или дешёво</span>
      </li>
      <li className="advantages__item">
        <div className="advantages__item__divider"></div>
      </li>
      <li className="advantages__item">
        <span className="advantages__item__title">Минимальная наценка</span>
        <span className="advantages__item__desc">Берём оплату только за доставку</span>
      </li>
    </ul>
  );
}

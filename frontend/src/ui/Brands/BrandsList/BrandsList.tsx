import React from 'react';
import './brandslist.css';
import BrandImage from '../../../assets/images/logo.png';

export default function BrandsList() {
  return (
    <div className="brands__menu">
      <ul className="brands__list">
        <li className="brands__item">
          <a className="brands__link" href="/">
            <img className="brands__link__image" src={BrandImage} alt="бренд" />
          </a>
        </li>
        <li className="brands__item">
          <a className="brands__link" href="/">
            <img className="brands__link__image" src={BrandImage} alt="бренд" />
          </a>
        </li>
        <li className="brands__item">
          <a className="brands__link" href="/">
            <img className="brands__link__image" src={BrandImage} alt="бренд" />
          </a>
        </li>
        <li className="brands__item">
          <a className="brands__link" href="/">
            <img className="brands__link__image" src={BrandImage} alt="бренд" />
          </a>
        </li>
        <li className="brands__item">
          <a className="brands__link" href="/">
            <img className="brands__link__image" src={BrandImage} alt="бренд" />
          </a>
        </li>
        <li className="brands__item">
          <a className="brands__link" href="/">
            <img className="brands__link__image" src={BrandImage} alt="" />
          </a>
        </li>
        <li className="brands__item">
          <button className="brands__button">
            <span className="brands__button__text">Другие бренды</span>
            <span className="brands__button__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0V20" stroke="white"/>
                <path d="M0 10H20" stroke="white"/>
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

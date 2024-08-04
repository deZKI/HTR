import React from 'react';
import './categorieslist.css';
import AdjustableBaseballcapsImage from '../../../assets/images/adjustable-baseballcaps_categories.png';
import SnapbackImage from '../../../assets/images/snapback_categories.png';

export default function CategoriesList() {
  return (
    <ul className="categories__list">
      <li className="categories__item">
        <div className="categories__text">Регулируемые бейсболки</div>
        <div className="categories__content">
          <img className="categories__content__image" src={AdjustableBaseballcapsImage} alt="регулируемые бейсболки" />
        </div>
      </li>
      <li className="categories__item">
        <div className="categories__text">Snapback</div>
        <div className="categories__content">
          <img className="categories__content__image" src={SnapbackImage} alt="Snapback" />
        </div>
      </li>
      <li className="categories__item">
        <div className="categories__text">Регулируемые бейсболки</div>
        <div className="categories__content">
          <img className="categories__content__image" src={AdjustableBaseballcapsImage} alt="регулируемые бейсболки" />
        </div>
      </li>
    </ul>
  );
}

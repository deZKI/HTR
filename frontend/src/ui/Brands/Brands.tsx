import React from 'react';
import './brands.css';
import BrandsList from './BrandsList/BrandsList';

export default function Brands() {
  return (
    <div className="brands">
      <div className="brands__container">
        <h3 className="brands__title">Покупайте кепки в магазине HTR - Самые крутые кепки только у нас!</h3>
        <BrandsList />
      </div>
    </div>
  );
}

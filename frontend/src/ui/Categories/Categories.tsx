import React from 'react';
import './categories.css';
import CategoriesList from './CategoriesList/CategoriesList';

export default function Categories() {
  return (
    <div className="categories">
      <div className="categories__container">
        <h3 className="categories__title">Популярные категории</h3>
        <CategoriesList />
      </div>
    </div>
  );
}

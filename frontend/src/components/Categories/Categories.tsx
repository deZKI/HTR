import React from 'react';
import styles from './categories.module.css';
import { Title } from '../Title';
import { CategoriesList } from './CategoriesList';

export function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.wrapper}>
        <Title text='Популярные категории' />
        <CategoriesList />
      </div>
    </div>
  );
}

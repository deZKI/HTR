import React from 'react';
import './headernavigationlist.css';

export default function HeaderNavigationList() {
  return (
    <ul className="header__navigation__list">
      <li className="header__navigation__item">
        <a className="header__navigation__link" href="/">Новые поступления</a>
      </li>
      <li className="header__navigation__item">
        <a className="header__navigation__link" href="/">Бейсболки</a>
      </li>
      <li className="header__navigation__item">
        <a className="header__navigation__link" href="/">Шапки</a>
      </li>
      <li className="header__navigation__item">
        <a className="header__navigation__link" href="/">Команды</a>
      </li>
      <li className="header__navigation__item">
        <a className="header__navigation__link" href="/">Бренды</a>
      </li>
      <li className="header__navigation__item">
        <a className="header__navigation__link" href="/">Эксклюзивы</a>
      </li>
      <li className="header__navigation__item">
        <a className="header__navigation__link" href="/">Распродажа</a>
      </li>
    </ul>
  );
}

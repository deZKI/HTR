import React from 'react';
import './headernavigation.css';
import HeaderNavigationList from './HeaderNavigationList/HeaderNavigationList';

export default function HeaderNavigation() {
  return (
    <div className="header__navigation">
      <div className="header__navigation__container">
        <HeaderNavigationList />
      </div>
    </div>
  );
}

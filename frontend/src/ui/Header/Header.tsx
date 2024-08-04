import React from 'react';
import './header.css';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

export default function Header() {
  return (
    <header className="header">
      <HeaderInfo />
      <HeaderNavigation />
    </header>
  );
}

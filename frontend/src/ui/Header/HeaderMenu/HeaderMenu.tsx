import React from 'react';
import './headermenu.css';
import {setMenuSwitcher} from '../../../store/menuSwitcher/menuSwitcherActions';
import YankeesImage from '../../../assets/images/yankees.png';
import LogoImage from '../../../assets/images/logo.png';
import CapsImage from '../../../assets/images/caps.png';
import NikeImage from '../../../assets/images/nike.png';
import {useSelector, useDispatch} from 'react-redux';
import {TInitialState} from '../../../store/reducer';

export default function HeaderMenu() {
  const menuSwitcher = useSelector<TInitialState, boolean>(state => state.menuSwitcher.menuSwitcher);
  const dispatch = useDispatch();

  function handleMenuClick() {
    dispatch(setMenuSwitcher(!menuSwitcher));
  }

  return (
    <div className="header__menu">
      <div className="header__menu__container">
        <div className="header__menu__header">
          <a className="header__menu__header__logo" href="/">
            <img className="header__menu__header__image" src={LogoImage} alt="логотип" />
          </a>
          <button className="header__menu__header__button" onClick={handleMenuClick}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 12L13 27" stroke="black"/>
              <path d="M13 12L28 27" stroke="black"/>
            </svg>
          </button>
        </div>
        <div className="header__menu__divider"></div>
        <ul className="header__menu__nav">
          <li className="header__menu__nav__item">
            <a className="header__menu__nav__link" href="/">Поступления</a>
          </li>
          <li className="header__menu__nav__item">
            <a className="header__menu__nav__link" href="/">Эксклюзивы</a>
          </li>
          <li className="header__menu__nav__item">
            <a className="header__menu__nav__link" href="/">Распродажа</a>
          </li>
        </ul>
        <ul className="header__menu__range">
          <li className="header__menu__range__item">
            <a className="header__menu__range__link" href="/">
              <div className="header__menu__range__text">Кепки</div>
              <div className="header__menu__range__product header__menu__range__product-caps">
                <img className="header__menu__range__image" src={CapsImage} alt="кепки" />
              </div>
            </a>
          </li>
          <li className="header__menu__range__item">
            <a className="header__menu__range__link" href="/">
              <div className="header__menu__range__text">Команды</div>
              <div className="header__menu__range__product header__menu__range__product-teams">
                <img className="header__menu__range__image" src={YankeesImage} alt="команды" />
              </div>
            </a>
          </li>
          <li className="header__menu__range__item">
            <a className="header__menu__range__link" href="/">
              <div className="header__menu__range__text">Бренды</div>
              <div className="header__menu__range__product">
                <img className="header__menu__range__image header__menu__range__product-brands" src={NikeImage} alt="бренды" />
              </div>
            </a>
          </li>
        </ul>
        {/* <div className="header__menu__accordion"></div> */}
        <button className="header__menu__button">Личный кабинет</button>
      </div>
    </div>
  );
}

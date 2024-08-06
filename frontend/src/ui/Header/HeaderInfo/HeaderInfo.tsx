import React from 'react';
import './headerinfo.css';
import {setMenuSwitcher} from '../../../store/menuSwitcher/menuSwitcherActions';
import LogoImage from '../../../assets/images/logo.png';
import {useSelector, useDispatch} from 'react-redux';
import {TInitialState} from '../../../store/reducer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

export default function HeaderInfo() {
  const menuSwitcher = useSelector<TInitialState, boolean>(state => state.menuSwitcher.menuSwitcher);
  const dispatch = useDispatch();

  function handleMenuClick() {
    dispatch(setMenuSwitcher(!menuSwitcher));
  }

  return (
    <div className="header__info">
      <div className="header__info__container">
        {menuSwitcher && <HeaderMenu />}
        <button className="header__info__menu" onClick={handleMenuClick}>
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 20.5H29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 14.5H29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 26.5H29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <a className="header__info__link" href="/">
          <img className="header__info__link__image" src={LogoImage} alt="логотип" />
        </a>
        <form className="header__info__form">
          <label className="header__info__form__label">
            <input className="header__info__form__input" type="text" placeholder="Поиск" />
          </label>
        </form>
        <div className="header__info__actions">
          <button className="header__info__actions__button header__info__actions__button-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
              <path d="M23.4808 22.9808L30 29.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M18 24.5C21.866 24.5 25 21.366 25 17.5C25 13.634 21.866 10.5 18 10.5C14.134 10.5 11 13.634 11 17.5C11 21.366 14.134 24.5 18 24.5Z" stroke="white" strokeWidth="2"/>
            </svg>
          </button>
          <button className="header__info__actions__button">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
              <path d="M11.6135 18.37L11.501 18.4825L11.3772 18.37C6.03348 13.5212 2.50098 10.315 2.50098 7.06372C2.50098 4.81372 4.18848 3.12622 6.43848 3.12622C8.17098 3.12622 9.85848 4.25122 10.4547 5.78122H12.5472C13.1435 4.25122 14.831 3.12622 16.5635 3.12622C18.8135 3.12622 20.501 4.81372 20.501 7.06372C20.501 10.315 16.9685 13.5212 11.6135 18.37ZM16.5635 0.876221C14.606 0.876221 12.7272 1.78747 11.501 3.21622C10.2747 1.78747 8.39598 0.876221 6.43848 0.876221C2.97348 0.876221 0.250977 3.58747 0.250977 7.06372C0.250977 11.305 4.07598 14.7812 9.86973 20.035L11.501 21.52L13.1322 20.035C18.926 14.7812 22.751 11.305 22.751 7.06372C22.751 3.58747 20.0285 0.876221 16.5635 0.876221Z" fill="white"/>
            </svg>
          </button>
          <button className="header__info__actions__button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
              <path d="M17.5833 6.25165H15.4167C15.4167 3.10165 13.0333 0.626648 10 0.626648C6.96667 0.626648 4.58333 3.10165 4.58333 6.25165H2.41667C1.225 6.25165 0.25 7.26415 0.25 8.50165V22.0016C0.25 23.2391 1.225 24.2516 2.41667 24.2516H17.5833C18.775 24.2516 19.75 23.2391 19.75 22.0016V8.50165C19.75 7.26415 18.775 6.25165 17.5833 6.25165ZM10 2.87665C11.8417 2.87665 13.25 4.33915 13.25 6.25165H6.75C6.75 4.33915 8.15833 2.87665 10 2.87665ZM17.5833 22.0016H2.41667V8.50165H17.5833V22.0016ZM10 13.0016C8.15833 13.0016 6.75 11.5391 6.75 9.62665H4.58333C4.58333 12.7766 6.96667 15.2516 10 15.2516C13.0333 15.2516 15.4167 12.7766 15.4167 9.62665H13.25C13.25 11.5391 11.8417 13.0016 10 13.0016Z" fill="white"/>
            </svg>
          </button>
          <button className="header__info__actions__button header__info__actions__button-cabinet">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
              <path d="M30 31.5V28.8333C30 27.4188 29.4732 26.0623 28.5355 25.0621C27.5979 24.0619 26.3261 23.5 25 23.5H15C13.6739 23.5 12.4021 24.0619 11.4645 25.0621C10.5268 26.0623 10 27.4188 10 28.8333V31.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 18.5C22.7614 18.5 25 16.2614 25 13.5C25 10.7386 22.7614 8.5 20 8.5C17.2386 8.5 15 10.7386 15 13.5C15 16.2614 17.2386 18.5 20 18.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

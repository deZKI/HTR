import React from 'react';
import './footerinfo.css';
import LogoImage from '../../../assets/images/logo.png';
import MIRImage from '../../../assets/images/mir.png';
import SFPImage from '../../../assets/images/sfp.png';

export default function FooterInfo() {
  return (
    <div className="footer__info">
      <a className="footer__logo" href="/">
        <img className="footer__logo__image" src={LogoImage} alt="логотип" />
      </a>
      <div className="footer__details">
        <h4 className="footer__details__title">Помощь</h4>
        <ul className="footer__details__list">
          <li className="footer__details__item">
            <a className="footer__details__link" href="/">Вопросы-ответы</a>
          </li>
          <li className="footer__detials__item">
            <a className="footer__details__link" href="/">Доставка</a>
          </li>
          <li className="footer__details__item">
            <a className="footer__details__link" href="/">Возврат</a>
          </li>
          <li className="footer__details__item">
            <a className="footer__details__link" href="/">Политика защиты персональных&nbsp;данных</a>
          </li>
        </ul>
      </div>
      <div className="footer__details">
        <h4 className="footer__details__title">О компании</h4>
        <ul className="footer__details__list">
          <li className="footer__details__item">
            <a className="footer__details__link" href="/">О нас</a>
          </li>
          <li className="footer__details__item">
            <a className="footer__details__link" href="/">Реквизиты</a>
          </li>
          <li className="footer__details__item">
            <a className="footer__details__link" href="/">Контакты</a>
          </li>
        </ul>
      </div>
      <div className="footer__contacts">
        <div className="footer__contacts__media">
          <h4 className="footer__contacts__media__title">Соцсети</h4>
          <div className="footer__contacts__media__info">
            <ul className="footer__contacts__media__list">
              <li className="footer__contacts__media__item">
                <a className="footer__contacts__media__link" href="/"></a>
              </li>
              <li className="footer__contacts__media__item">
                <a className="footer__contacts__media__link" href="/"></a>
              </li>
              <li className="footer__contacts__media__item">
                <a className="footer__contacts__media__link" href="/"></a>
              </li>
            </ul>
            <div className="footer__contacts__payments">
              <div className="footer__contacts__payments__mir">
                <img className="footer__contacts__mir__image" src={MIRImage} alt="МИР" />
              </div>
              <div className="footer__contacts__payments__sfp">
                <img className="footer__contacts__sfp__image" src={SFPImage} alt="СБП" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__contacts__info">
          <h4 className="footer__contacts__info__title">Нужна помощь?</h4>
          <div className="footer__contacts__info__content">
            <a className="footer__contacts__info__link" href="/"></a>
            <div className="footer__contacts__info__telegram">
              <span className="footer__contacts__info__text">Telegram</span>
              <a className="footer__contacts__info__support" href="/">@Help_bot</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__payments">
        <div className="footer__payments__mir">
          <img className="footer__payments__mir__image" src={MIRImage} alt="МИР" />
        </div>
        <div className="footer__payments__sfp">
          <img className="footer__payments__sfp__image" src={SFPImage} alt="СБП" />
        </div>
      </div>
    </div>
  );
}

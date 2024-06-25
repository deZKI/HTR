import React from 'react';
import styles from './footerinfo.module.css';
import Logo from '../../../assets/images/logo.png'

export function FooterInfo() {
  return (
    <div className={styles.container}>
      <a className={styles.logo} href="/"><img className={styles.image} src={Logo} alt="логотип" /></a>
      <div className={styles.help}>
        <h4 className={styles.help__title}>Помощь</h4>
        <ul className={styles.help__list}>
          <li className={styles.help__item}><a className={styles.help__link} href="/">Вопросы-ответы</a></li>
          <li className={styles.help__item}><a className={styles.help__link} href="/">Доставка</a></li>
          <li className={styles.help__item}><a className={styles.help__link} href="/">Возврат</a></li>
          <li className={styles.help__item}><a className={styles.help__link} href="/">Политика защиты<br/>персональных данных</a></li>
        </ul>
      </div>
      <div className={styles.company}>
        <h4 className={styles.company__title}>О компании</h4>
        <ul className={styles.company__list}>
          <li className={styles.company__item}><a className={styles.company__link} href="/">О нас</a></li>
          <li className={styles.company__item}><a className={styles.company__link} href="/">Реквизиты</a></li>
          <li className={styles.company__item}><a className={styles.company__link} href="/">Контакты</a></li>
        </ul>
      </div>
      <div className={styles.contact}>
        <div className={styles.contact__media}>
          <h4 className={styles.contact__media__title}>Следите за нами<br/>в соц. сетях</h4>
          <ul className={styles.contact__media__list}>
            <li className={styles.contact__media__item}><a className={styles.contact__media__link} href="/"></a></li>
            <li className={styles.contact__media__item}><a className={styles.contact__media__link} href="/"></a></li>
            <li className={styles.contact__media__item}><a className={styles.contact__media__link} href="/"></a></li>
          </ul>
        </div>
        <div className={styles.contact__telegram}>
          <h4 className={styles.contact__telegram__title}>Нужна помощь?</h4>
          <ul className={styles.contact__telegram__list}>
            <li className={styles.contact__telegram__item}><a className={styles.contact__telegram__link} href="/"></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

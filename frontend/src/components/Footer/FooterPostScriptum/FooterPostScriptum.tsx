import React from 'react';
import styles from './footerpostscriptum.module.css';
import MIR from '../../../assets/images/mir.png';
import SFP from '../../../assets/images/sfp.png';

export function FooterPostScriptum() {
  return (
    <div className={styles.container}>
      <div className={styles.mir}>
        <img className={styles.mir__image} src={MIR} alt="МИР" />
      </div>
      <div className={styles.sfp}>
        <img className={styles.sfp__image} src={SFP} alt="СБП" />
      </div>
      <div className={styles.desc}>
        Этот сайт использует cookies. Продолжая использовать этот сайт, вы соглашаетесь с<br/>использованием нами файлов cookies в соответствии с нашей политикой использования<br/>файлов cookies.
      </div>
    </div>
  );
}

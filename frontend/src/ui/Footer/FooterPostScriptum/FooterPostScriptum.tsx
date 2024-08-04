import React from 'react';
import './footerpostscriptum.css';
import MIRImage from '../../../assets/images/mir.png';
import SFPImage from '../../../assets/images/sfp.png';

export default function FooterPostScriptum() {
  return (
    <div className="footer__post-scriptum">
      <div className="footer__post-scriptum__mir">
        <img className="footer__post-scriptum__mir__image" src={MIRImage} alt="МИР" />
      </div>
      <div className="footer__post-scriptum__sfp">
        <img className="footer__post-scriptum__sfp__image" src={SFPImage} alt="СБП" />
      </div>
      <div className="footer__post-scriptum__desc">
        Этот сайт использует cookies. Продолжая использовать этот сайт, вы соглашаетесь с использованием нами файлов cookies в соответствии с нашей политикой использования файлов cookies.
      </div>
    </div>
  );
}

import React from 'react';
import './footer.css';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterPostScriptum from './FooterPostScriptum/FooterPostScriptum';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterInfo />
        <div className="footer__divider"></div>
        <FooterPostScriptum />
      </div>
    </footer>
  );
}

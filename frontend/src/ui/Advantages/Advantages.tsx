import React from 'react';
import './advantages.css';
import Advantageslist from './AdvantagesList/AdvantagesList';

export default function Advantages() {
  return (
    <div className="advantages">
      <div className="advantages__container">
        <h3 className="advantages__title">Наши приемущуства</h3>
        <Advantageslist />
      </div>
    </div>
  );
}

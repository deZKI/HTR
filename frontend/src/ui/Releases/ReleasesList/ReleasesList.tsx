import React from 'react';
import './releaseslist.css';
import CarchattImage from '../../../assets/images/carchatt_release.png';
import NewYorkYankeesImage from '../../../assets/images/new-york-yankees_release.png';
import NewBalanceImage from '../../../assets/images/new-balance_release.png';

export default function ReleasesList() {
  return (
    <div className='releases__menu'>
      <ul className="releases__list">
        <li className="releases__item">
          <img className="releases__image" src={NewYorkYankeesImage} alt="New Balance" />
        </li>
        <li className="releases__item">
          <img className="releases__image" src={NewBalanceImage} alt="New&nbsp;York Yankees" />
        </li>
        <li className="releases__item">
          <img className="releases__image" src={CarchattImage} alt="Carchatt" />
        </li>
      </ul>
    </div>
  );
}

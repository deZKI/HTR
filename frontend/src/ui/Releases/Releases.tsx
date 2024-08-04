import React from 'react';
import './releases.css';
import ReleasesList from './ReleasesList/ReleasesList';

export default function Releases() {
  return (
    <div className="releases">
      <div className="releases__container">
        <h3 className="releases__title">Последние релизы</h3>
        <ReleasesList />
      </div>
    </div>
  );
}

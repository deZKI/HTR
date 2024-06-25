import React from 'react';
import styles from './releases.module.css';
import { Title } from '../Title';
import { ReleasesList } from './ReleasesList';

export function Releases() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Title text='Последние релизы' />
        <ReleasesList />
      </div>
    </div>
  );
}

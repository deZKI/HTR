import React from 'react';
import styles from './title.module.css';

type TTitle = {
  text: string;
}

export function Title({ text }: TTitle) {
  return (
    <h3 className={styles.title}>{text}</h3>
  );
}

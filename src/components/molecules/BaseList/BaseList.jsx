import React from 'react';
import styles from './BaseList.module.css';

export default function BaseList({ label, children }) {
  return (
    <div className={styles.container}>
      <p>{label}</p>
      {children}
    </div>
  )
}

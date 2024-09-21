import React from 'react';
import styles from './MainImageCard.module.css';
import cover from '@assets/cover.jpg'


export default function MainImageCard() {
  return (
    <div className={styles.container}>
        <img className={styles.cover} src={cover} alt='main' />
        <h2 className={styles.label}>Fashion <br />boutique</h2>
        <button className={styles.main_btn}>go shopping</button>
    </div>
  )
}

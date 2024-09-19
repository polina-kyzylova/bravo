import React from 'react';
import styles from './BaseCard.module.css';


export default function BaseCard({ title }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.text}>
        <p>
          Welcome to our unique boutique!<br />
          Here you will find amazing outfits and accessories that are suitable for any occasion.
          <br /><br />
        </p>
        <p>
          We believe that art shapes fashion, and fashion, in turn, is inspired by art.
          Ultimately, fashion is not only clothing, but also a way of communicating,
          understanding oneself and the world around us. <br /><br />
        </p>
        <p>Let every passerby shout <span>Bravo</span> after you!</p>
      </div>
    </div>
  )
}

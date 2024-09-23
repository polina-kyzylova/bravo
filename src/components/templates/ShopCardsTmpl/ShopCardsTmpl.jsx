import React from 'react';
import styles from './ShopCardsTmpl.module.css';
import { useNavigate } from 'react-router-dom';
import BaseButton from '@/components/molecules/BaseButton/BaseButton';

export default function ShopCardsTmpl({ clothes }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          onClick={() => navigate('/')}
          className={styles.back}
        >go back
        </button>
        <h2>bravo</h2>
      </div>

      <div className={styles.content}>
        {clothes.map((item, index) =>
          <div className={styles.card} key={index}>
            <img
              className={styles.photo}
              src={item.image}
              alt={item.title}
            />

            <div className={styles.info}>
              <h2>{item.price}</h2>
              <BaseButton label='buy' onClick={() => alert('Thanks for the purchase!')}/>
            </div>

            <p>{item.title}</p>
          </div>
        )}
      </div>
    </div>
  )
}

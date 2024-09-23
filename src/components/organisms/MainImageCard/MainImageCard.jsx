import React from 'react';
import styles from './MainImageCard.module.css';
import cover from '@assets/cover.jpg'
import { useNavigate } from 'react-router-dom';
import BaseButton from '@/components/molecules/BaseButton/BaseButton';


export default function MainImageCard() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img className={styles.cover} src={cover} alt='main' />
      <h2 className={styles.label}>Fashion <br />boutique</h2>

      <div className={styles.main_btn}>
        <BaseButton
          label='go shopping'
          color='blue'
          onClick={() => navigate('/shop')}
        />
      </div>
    </div>
  )
}

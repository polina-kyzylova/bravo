import React from 'react';
import styles from './MainBrandCard.module.css';
import SloganBox from '@molecules/SloganBox/SloganBox';
import AddressBox from '@molecules/AddressBox/AddressBox';


export default function MainBrandCard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>bravo</h1>
      <SloganBox />
      <AddressBox />
    </div>
  )
}

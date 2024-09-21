import React from 'react';
import styles from './OnboardingTmpl.module.css';
import MainImageCard from '@organisms/MainImageCard/MainImageCard';
import MainBrandCard from '@organisms/MainBrandCard/MainBrandCard';
import BaseCard from '@organisms/BaseCard/BaseCard';


export default function OnboardingTmpl() {
  return (
    <div className={styles.container}>
      <BaseCard>
        <div className={styles.content}>
          <h2>About</h2>
          <p>
            Welcome to our unique boutique!<br />
            Here you will find amazing outfits and accessories that are suitable for any occasion.
            <br /><br />
          </p>
          <p>
            We believe that fashion is not only clothing, but also a way of communicating,
            understanding oneself and the world around us. <br /><br />
          </p>
          <p>Let every passerby shout <span>Bravo</span> after you!</p>
        </div>
      </BaseCard>

      <MainBrandCard />
      <MainImageCard />
    </div>
  )
}

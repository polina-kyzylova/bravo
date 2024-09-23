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
            We are delighted to welcome you to the world of style and fashion!
            Here, you will find a unique collection of clothing that is suitable for any
            occasion - from casual looks to evening events. Our experienced stylists are here
            to help you find the perfect outfit that will enhance your beauty and personality.
            <br /><br />
          </p>
          <p>Let every passerby shout <span>Bravo</span> after you!</p>
        </div>
      </BaseCard>

      <MainBrandCard />
      <MainImageCard />
    </div>
  )
}

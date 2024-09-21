import React from 'react';
import styles from './OnboardingTmpl.module.css';
import MainImageCard from '@organisms/MainImageCard/MainImageCard';
import MainBrandCard from '@organisms/MainBrandCard/MainBrandCard';
import BaseCard from '@organisms/BaseCard/BaseCard';


export default function OnboardingTmpl() {
  return (
    <div className={styles.container}>
      <BaseCard title='About' />
      <MainBrandCard />
      <MainImageCard />
    </div>
  )
}

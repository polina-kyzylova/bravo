import React from 'react';
import styles from './MainPage.module.css';
import OnboardingTmpl from '@templates/OnboardingTmpl/OnboardingTmpl';
import FooterTmpl from '@/components/templates/FooterTmpl/FooterTmpl';


export default function MainPage() {
  return (
    <div className={styles.wrapper}>
      <OnboardingTmpl />
      <FooterTmpl />
    </div>
  )
}

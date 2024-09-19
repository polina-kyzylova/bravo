import React from 'react';
import styles from './MainPage.module.css';
import OnboardingTmpl from '../../templates/OnboardingTmpl/OnboardingTmpl';


export default function MainPage() {
  return (
    <div className={styles.wrapper}>
      <OnboardingTmpl />
    </div>
  )
}

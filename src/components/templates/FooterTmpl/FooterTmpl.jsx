import React from 'react';
import styles from './FooterTmpl.module.css';
import BaseCard from '@/components/organisms/BaseCard/BaseCard';
import BaseList from '@/components/molecules/BaseList/BaseList';


export default function FooterTmpl() {
  return (
    <div className={styles.container}>
      <div className={styles.team_box}>
        <BaseCard cardColor='blue'>
          <div className={styles.content}>
            <h2>Join our team</h2>
            <p>Send your CV to <a href='mailto:team@bravo.com'>team@bravo.com</a> by email and we will definitely find a suitable job for you!
            </p>
          </div>
        </BaseCard>
      </div>

      <BaseCard>
        <div className={styles.content}>
          <div className={styles.link_box}>
            <BaseList label='Assistance'>
              <ul>
                <li>Payment</li>
                <li>Delivery</li>
                <li>Exchanges and returns</li>
                <li>Bravo Members Club</li>
              </ul>
            </BaseList>

            <BaseList label='Legal and Cookies'>
              <ul>
                <li>Payment 2</li>
                <li>Delivery 2</li>
                <li>Exchanges and returns</li>
                <li>Bravo Members Club</li>
              </ul>
            </BaseList>

            <BaseList label='Customer service'>
              <ul>
                <li>Payment</li>
                <li>Delivery</li>
                <li>Exchanges and returns</li>
                <li>Bravo Members Club</li>
              </ul>
            </BaseList>
          </div>

          <p><span>bravo</span> - All rights reserved</p>
        </div>
      </BaseCard>
    </div>
  )
}

import React from 'react';
import styles from './SloganBox.module.css';


export default function SloganBox() {
  return (
    <div className={styles.container}>
        <ul className={styles.box_accent}>
            <li>got</li>
            <li>most</li>
            <li>so</li>
            <li>just</li>
        </ul>

        <ul className={styles.box}>
            <li>Stamina</li>
            <li>Confident</li>
            <li>Elegant</li>
            <li>Greatest</li>
        </ul>
    </div>
  )
}

import React from 'react';
import styles from './AddressBox.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';


export default function AddressBox() {
    return (
        <div className={styles.container}>
            <h3>235 Main St, New York, NY 10001<br />Daily from 10am to 10pm</h3>

            <div className={styles.icons_box}>
                <span className={styles.contact_icon}>
                    <InstagramIcon sx={{ color: '#28533F', fontSize: 35 }} />
                </span>
                <span className={styles.contact_icon}>
                    <XIcon sx={{ color: '#28533F', fontSize: 35 }} />
                </span>
                <span className={styles.contact_icon}>
                    <PinterestIcon sx={{ color: '#28533F', fontSize: 35 }} />
                </span>
            </div>
        </div>
    )
}

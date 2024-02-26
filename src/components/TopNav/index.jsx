import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from "react-router-dom";

export default function TopNav() {
    const navigate = useNavigate();

    return <div className={styles['nav-bar']}>
        <div className={styles["left-container"]}>
            <input style={{ height: '34px' }} type='text' placeholder='Search your CRM..'/>
        </div>
        <div className={styles['right-container']}>
            <div className={styles["trial"]}>Your trial ends in 16days</div>
            <div className={styles['global-add']} onClick={() => navigate('/')}>+</div>
            <div className={styles["avatar"]}></div>
        </div>
    </div>
};
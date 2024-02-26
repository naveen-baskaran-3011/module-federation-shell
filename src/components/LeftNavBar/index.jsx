import React from 'react';
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

export default function LeftNavBar () {
    return <div className={styles['left-nav-bar-container']}>
        <Link to="/list"><button>List</button></Link>
    </div>
}
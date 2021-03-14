import React from 'react';
import styles from '../Loader/Loader.module.css'
const Loader = () => {
    return (
        <div className={`${styles.lds_dual_ring}`}>
LOADING
        </div>
    );
};

export default Loader;
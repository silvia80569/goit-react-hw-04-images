import React from 'react';
import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';
const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Circles height="50" width="50" color="#ffffff" ariaLabel="loading" />
    </div>
  );
};

export default Loader;

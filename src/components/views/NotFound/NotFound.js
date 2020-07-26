import React from 'react';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='container'>
    <h1 className={styles.header}>404 Page not found :(</h1>
    <div className={styles.link}>
      <Link to='/'>Go back to main page !</Link>
    </div>
  </div>
);

export default NotFound;

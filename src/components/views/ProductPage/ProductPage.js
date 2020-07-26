import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import NotFound from '../NotFound/NotFound';

const ProductPage = ({ error, name, id, price, img }) => {
  if (error) return <NotFound />;
  else
    return (
      <div className='container'>
        <div className={styles.root}>
          <h4>Product page of: {name}</h4>
          <div className={styles.img}>
            <img src={img} alt={id}></img>
          </div>
          <span>${price}</span>
        </div>
      </div>
    );
};

ProductPage.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
};

export default ProductPage;

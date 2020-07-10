import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  img,
  wishlist,
  compare,
  oldPrice,
  ...props
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {promo && <div className={styles.sale}>{promo}</div>}
      <img alt={name} src={img} />
      <div className={styles.buttons}>
        <Button className={styles.options} variant='small'>
          Quick View
        </Button>
        <Button className={styles.options} variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          variant={wishlist ? 'outline__checked' : 'outline'}
          onClick={() => props.changeWishlist(id)}
          className={wishlist ? styles.wishlist : null}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant={compare ? 'outline__checked' : 'outline'}>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.oldPrice}>
        {oldPrice === undefined ? <span></span> : <span>$ {oldPrice}</span>}
      </div>
      <div className={styles.price}>
        <Button className={styles.priceBtn} noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  img: PropTypes.string,
  wishlist: PropTypes.bool,
  compare: PropTypes.bool,
  id: PropTypes.string,
  changeWishlist: PropTypes.func,
};

export default ProductBox;

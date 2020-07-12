import React, { useState } from 'react';
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
  userStars,
  ...props
}) => {
  const [hover, setHover] = useState(null);
  return (
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
          {[1, 2, 3, 4, 5].map(i => {
            let count = stars;
            if (userStars) {
              count = userStars;
            }
            if (hover) {
              count = hover;
            }
            return (
              <a key={i} href='#' className={userStars ? styles.userStars : ''}>
                {i <= count ? (
                  <FontAwesomeIcon
                    onMouseOver={() => {
                      setHover(i);
                    }}
                    onMouseLeave={() => {
                      setHover(null);
                    }}
                    onClick={event => {
                      event.preventDefault();
                      return props.changeUserStars(id, i);
                    }}
                    icon={faStar}
                  >
                    {i} stars
                  </FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    onMouseOver={() => {
                      setHover(i);
                    }}
                    onMouseLeave={() => {
                      setHover(null);
                    }}
                    onClick={event => {
                      event.preventDefault();
                      return props.changeUserStars(id, i);
                    }}
                    icon={farStar}
                  >
                    {i} stars
                  </FontAwesomeIcon>
                )}
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant={wishlist ? 'outline__checked' : 'outline'}
            onClick={event => {
              event.preventDefault();
              return props.changeWishlist(id);
            }}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant={compare ? 'outline__checked' : 'outline'}
            onClick={event => {
              event.preventDefault();
              return props.changeCompareList(id);
            }}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.oldPrice}>{oldPrice && <span>$ {oldPrice}</span>}</div>
        <div className={styles.price}>
          <Button className={styles.priceBtn} noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

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
  changeCompareList: PropTypes.func,
  changeUserStars: PropTypes.func,
  userStars: PropTypes.number,
};

export default ProductBox;

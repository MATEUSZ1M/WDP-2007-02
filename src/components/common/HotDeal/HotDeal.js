import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDeal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Stars from '../Stars/StarsContainer';

const HotDeal = ({
  id,
  name,
  price,
  stars,
  img,
  wishlist,
  compare,
  oldPrice,
  userStars,
  ...props
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img alt={name} src={img} />
        <div className={styles.buttons}>
          <Button className={styles.options} variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
          <div className={styles.timer}>
            <div>
              <span>25</span> DAYS
            </div>
            <div>
              <span>10</span> HRS
            </div>
            <div>
              <span>45</span> MINS
            </div>
            <div>
              <span>30</span> SECS
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <Stars id={id} stars={stars} userStars={userStars} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={event => {
              event.preventDefault();
              return;
            }}
          >
            <FontAwesomeIcon icon={faEye}>Quick View</FontAwesomeIcon>
          </Button>
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

HotDeal.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  stars: PropTypes.number,
  img: PropTypes.string,
  wishlist: PropTypes.bool,
  compare: PropTypes.bool,
  id: PropTypes.string,
  changeWishlist: PropTypes.func,
  changeCompareList: PropTypes.func,
  userStars: PropTypes.number,
};

export default HotDeal;

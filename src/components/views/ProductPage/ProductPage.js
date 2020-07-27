import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import NotFound from '../NotFound/NotFound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleLeft,
  faExchangeAlt,
  faShoppingBasket,
  faHeart,
  faEnvelope,
  faPlus,
  faMinus,
  faExpandArrowsAlt,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/Stars';
import Swipeable from '../../common/Swipeable/Swipeable';

const ProductPage = ({ error, name, price, oldPrice, img, category }) => {
  if (error) return <NotFound />;
  else
    return (
      <div className={styles.root}>
        <div className={styles.heroProduct}>
          <div className='container'>
            <div className={styles.heroWrapper}>
              <h2 className={styles.heroHeader}>Furniture</h2>
              <ul className={styles.verticalList}>
                <li>
                  Home <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </li>
                <li>
                  Furniture <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </li>
                <li>
                  <span>{category} </span>
                  <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={'container ' + styles.mainContent}>
          <div className={'col-5 ' + styles.mainLeft}>
            <div className={styles.productBox}>
              <img src={img} alt={name}></img>
              <Button className={styles.button} variant='outline'>
                <FontAwesomeIcon icon={faExpandArrowsAlt}></FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.gallery}>
              <div className={styles.galleryWrapper}>
                <Swipeable>
                  <div className={'col-3 ' + styles.galleryItem}>
                    <img src={img} alt={name}></img>
                  </div>
                  <div className={'col-3 ' + styles.galleryItem}>
                    <img src={img} alt={name}></img>
                  </div>
                  <div className={'col-3 ' + styles.galleryItem}>
                    <img src={img} alt={name}></img>
                  </div>
                </Swipeable>
                <div className={styles.buttonWrapperL}>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.buttonWrapperR}>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-7 ' + styles.mainRight}>
            <div className={styles.mainSection}>
              <h3>{name}</h3>
              <ul className={styles.verticalList}>
                <li>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                  </Button>
                </li>
                <li>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                  </Button>
                </li>
              </ul>
            </div>
            <div className={styles.mainSection}>
              <Stars></Stars>
              <Button>(0 reviews)</Button>
              <Button>Add Your Review</Button>
            </div>
            <div className={styles.mainSection}>
              <div className={styles.oldPrice} noHover>
                {oldPrice && <span>$ {oldPrice}</span>}
              </div>
              <Button className={styles.price} noHover variant='main'>
                $ {price}
              </Button>
            </div>
            <div className={styles.mainSectionCol}>
              <div className={styles.buttonWrapper}>
                <Button className={styles.button} variant='outline'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                  Add to cart
                </Button>
                <Button className={styles.button} variant='outline'>
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </Button>
                <Button className={styles.button} variant='outline'>
                  <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                </Button>
                <Button className={styles.button} variant='outline'>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </Button>
              </div>
              <div className={styles.buttonWrapper}>
                <h5>Quantity :</h5>
                <Button className={styles.number} noHover variant='outline'>
                  2
                </Button>
                <Button className={styles.button} variant='outline'>
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </Button>
                <Button className={styles.button} variant='outline'>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.mainSectionCol}>
              <h4>Quick Overview</h4>
              <p>
                I&#39;m baby tumeric small batch vexillologist, letterpress cloud bread
                everyday carry fingerstache.
              </p>
            </div>
            <div className={styles.mainSectionCol}>
              <div className={styles.textWrapper}>
                <h5>Avability:</h5>
                <span> In stock</span>
              </div>
              <div className={styles.textWrapper}>
                <h5>Category:</h5>
                <span>{category}</span>
              </div>
            </div>
            <div className={styles.mainSection}>
              <div className={styles.buttonWrapper}>
                <Button className={styles.button} variant='outline'>
                  facebook
                </Button>
                <Button className={styles.button} variant='outline'>
                  twitter
                </Button>
                <Button className={styles.button} variant='outline'>
                  Google+
                </Button>
                <Button className={styles.button} variant='outline'>
                  Pinterest
                </Button>
                <Button className={styles.button} variant='outline'>
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

ProductPage.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  category: PropTypes.string,
  products: PropTypes.array,
};

export default ProductPage;

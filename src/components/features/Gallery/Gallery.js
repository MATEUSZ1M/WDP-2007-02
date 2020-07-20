import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';

import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/StarsContainer';
import Swipeable from '../../common/Swipeable/Swipeable';

class Gallery extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'topSeller',
    activePhoto: 'aenean-ru-bristique-1',
    fade: false,
    manualPageChange: false,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage, manualPageChange: true });
  }

  handleCategoryChange(newCategory) {
    this.setState({ fade: true });
    setTimeout(
      () =>
        this.setState({
          activeCategory: newCategory,
          fade: false,
          activePage: 0,
          activePhoto: this.props[newCategory][0].id,
        }),
      100
    );
  }

  handlePhotoChange(newPhoto) {
    this.setState({ fade: true });
    setTimeout(() => this.setState({ activePhoto: newPhoto, fade: false }), 100);
  }

  handleRightAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  };

  handleLeftAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else {
      this.setState({ activePage: activePage + 1 });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.device !== this.props.device) {
      this.setState({ activePage: 0 });
    }
  }

  render() {
    const { changeWishlist, changeCompareList, categories, device } = this.props;
    const { activeCategory, activePage, fade, activePhoto } = this.state;

    const categoryProducts = this.props[activeCategory];
    const elementsPerDevice = device === 'mobile' ? 2 : device === 'tablet' ? 3 : 6;

    const pagesCount = Math.ceil(categoryProducts.length / elementsPerDevice);

    const pageDecrease = () => {
      if (activePage > 0) {
        this.handlePageChange(activePage - 1);
      }
    };

    const pageIncrease = () => {
      if (activePage === pagesCount - 1) {
        return;
      } else {
        this.handlePageChange(activePage + 1);
      }
    };

    const isActive = product => {
      if (product.id === activePhoto) {
        return product;
      }
    };

    const swipeContent = [];
    for (let page = 0; page < pagesCount; page++) {
      swipeContent.push(
        <div key={page} className={styles.minaturesFrame}>
          {categoryProducts
            .slice(page * elementsPerDevice, (page + 1) * elementsPerDevice)
            .map(product => (
              <div
                key={product.id}
                className={
                  product.id === activePhoto
                    ? styles.imgWrapper + ' ' + styles.activeImage
                    : styles.imgWrapper
                }
                onClick={() => this.handlePhotoChange(product.id)}
              >
                <img alt={product.name} src={product.img} />
              </div>
            ))}
        </div>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-6 ' + styles.leftPanel}>
              <div className={styles.heading}>
                <h3>Furniture gallery</h3>
              </div>
              <div className={styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={fade ? styles.fadeOut : styles.fadeIn}>
                {categoryProducts.filter(isActive).map(product => (
                  <div key={product.id} className={styles.product}>
                    <div className={styles.photo}>
                      <img alt={product.name} src={product.img} />
                    </div>
                    <div className={styles.buttons}>
                      <div className={styles.buttonWrapper}>
                        <Button
                          className={styles.button}
                          variant={product.wishlist ? 'outline__checked' : 'outline'}
                          onClick={event => {
                            event.preventDefault();
                            return changeWishlist(product.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </Button>
                        <span>Add To Wishlist</span>
                      </div>
                      <div className={styles.buttonWrapper}>
                        <Button
                          className={styles.button}
                          variant={product.compare ? 'outline__checked' : 'outline'}
                          onClick={event => {
                            event.preventDefault();
                            return changeCompareList(product.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                        </Button>
                        <span>Add To Compare</span>
                      </div>
                      <div className={styles.buttonWrapper}>
                        <Button className={styles.button} variant='outline'>
                          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                        </Button>
                        <span>Check The Product</span>
                      </div>
                      <div className={styles.buttonWrapper}>
                        <Button className={styles.button} variant='outline'>
                          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                        </Button>
                        <span>Add To Cart</span>
                      </div>
                    </div>
                    <div className={styles.priceWrapper}>
                      <div className={styles.price}>$ {product.price}.00</div>
                      <div className={styles.oldPrice}>
                        {product.oldPrice && <span>$ {product.oldPrice}.00</span>}
                      </div>
                    </div>
                    <div className={styles.stars}>
                      <h6>{product.name}</h6>
                      <Stars
                        id={product.id}
                        stars={product.stars}
                        userStars={product.userStars}
                      />
                    </div>
                  </div>
                ))}

                <div className={styles.miniatures}>
                  <div className={styles.button} onClick={pageDecrease}>
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className={styles.icon}
                    ></FontAwesomeIcon>
                  </div>

                  <div className={styles.miniaturesBox}>
                    <Swipeable
                      activePage={this.state.activePage}
                      rightAction={this.handleRightAction}
                      leftAction={this.handleLeftAction}
                    >
                      {swipeContent}
                    </Swipeable>
                  </div>

                  <div className={styles.button} onClick={pageIncrease}>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className={styles.icon}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-6 ' + styles.rightPanel}>
              <div className={styles.photo}>
                <img
                  src='https://i.postimg.cc/G2W07cfW/bristique-5.jpg'
                  alt='furniture'
                />
              </div>
              <div className={styles.content}>
                <div className={styles.contentPrice}>
                  from <span>$50.80</span>
                </div>
                <h2>Bedroom Bed</h2>
                <div className={styles.button}>
                  <Button variant='green'>shop now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  changeWishlist: PropTypes.func,
  changeCompareList: PropTypes.func,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  device: PropTypes.string,
};

export default Gallery;

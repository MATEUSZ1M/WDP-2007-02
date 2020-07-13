import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promote.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Swipeable from '../../common/Swipeable/Swipeable';
import HotDeal from '../../common/HotDeal/HotDealContainer';
import Button from '../../common/Button/Button';

class Promote extends React.Component {
  state = {
    activePage: 0,
  };

  render() {
    const { products } = this.props;
    const { activePage } = this.state;
    const categoryProducts = products.filter(item => item.hotDeal === true);
    const image = [
      {
        url:
          'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        alt: 'furniture',
      },
      {
        url:
          'https://images.pexels.com/photos/545034/pexels-photo-545034.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        alt: 'bed',
      },
      {
        url:
          'https://images.pexels.com/photos/1139784/pexels-photo-1139784.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        alt: 'bedroom',
      },
    ];

    const dots = [];
    for (let i = 0; i < categoryProducts.length; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row ' + styles.promote}>
            <div className={'col-4 ' + styles.leftPanel}>
              <div className={'col-auto ' + styles.heading}>
                <h3>Hot Deals</h3>
                <div className={'col-12 col-lg-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
              <Swipeable>
                {categoryProducts.map(item => (
                  <div key={item.id}>
                    <HotDeal {...item} />
                  </div>
                ))}
              </Swipeable>
            </div>
            <div className={'col-8 ' + styles.rightPanel}>
              <div className={styles.swipe}>
                <Swipeable>
                  {image.map(item => (
                    <div key={item.alt} className={styles.image}>
                      <img src={item.url} alt={item.name} />
                      <div className={styles.imageHover}>
                        <div className={styles.title}>
                          <h4>
                            indoor <span>Furniture</span>
                          </h4>
                          <div className={styles.subtitle}>
                            save up to 50% of all furniture
                          </div>
                        </div>
                        <Button className={styles.shopNow}>SHOP NOW</Button>
                      </div>
                    </div>
                  ))}
                </Swipeable>
              </div>
              <div>
                <Button className={styles.button} variant='small'>
                  <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                </Button>
                <Button className={styles.button} variant='small'>
                  <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promote.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

export default Promote;

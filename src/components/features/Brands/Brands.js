import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

class Brands extends React.Component {
  render() {
    const { brands } = this.props;

    const swiperParams = {
      grabCursor: true,
      loop: true,
      slidesPerView: 6,
      slidesPerGroup: 6,
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <div className={styles.control}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
            </div>

            <div className={styles.logoBox}>
              <Swipeable swiperParams={swiperParams}>
                {brands.map(brand => (
                  <div key={brand.id} className={styles.logo}>
                    <img src={brand.logo} alt={brand.name} />
                  </div>
                ))}
              </Swipeable>
            </div>

            <div className={styles.control}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      logo: PropTypes.string,
    })
  ),
};

export default Brands;

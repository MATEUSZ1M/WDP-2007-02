import React, { useRef } from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

const Brands = ({ brands }) => {
  const params = {
    grabCursor: true,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 40,
      },
    },
  };

  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.control} onClick={goPrev}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
          </div>

          <div className={styles.logoBox}>
            <Swiper ref={swiperRef} {...params}>
              {brands.map(brand => (
                <div key={brand.id} className={styles.logo}>
                  <img src={brand.logo} alt={brand.name} />
                </div>
              ))}
            </Swiper>
          </div>

          <div className={styles.control} onClick={goNext}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

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

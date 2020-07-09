import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

import style from './Swipeable.moule.scss';

const Swipeable = props => {
  const params = {
    direction: 'horizontal',
    centeredSlides: false,
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
  };

  return (
    <Swiper classname={style.swipeable} {...params}>
      {props.children}
    </Swiper>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  activePage: PropTypes.number,
  row: PropTypes.number,
  column: PropTypes.number,
};

export default Swipeable;

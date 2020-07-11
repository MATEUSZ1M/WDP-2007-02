import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

const Swipeable = props => {
  const params = {
    direction: 'horizontal',
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  return <Swiper {...params}>{props.children}</Swiper>;
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  activePage: PropTypes.number,
  row: PropTypes.number,
  column: PropTypes.number,
  setActivePage: PropTypes.func,
};

export default Swipeable;

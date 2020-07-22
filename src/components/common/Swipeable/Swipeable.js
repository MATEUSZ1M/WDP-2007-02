import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

const Swipeable = props => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(props.activePage, 0);
    }
  });

  const params = {
    spaceBetween: 30,
    noSwiping: props.noSwiping === true ? true : false,
    grabCursor: props.grabCursor === false ? false : true,
    on: {
      slidePrevTransitionStart: props.rightAction,
      slideNextTransitionStart: props.leftAction,
    },
  };

  return (
    <Swiper ref={swiperRef} {...params}>
      {props.children}
    </Swiper>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  rightAction: PropTypes.func,
  leftAction: PropTypes.func,
  activePage: PropTypes.number,
  noSwiping: PropTypes.bool,
  grabCursor: PropTypes.bool,
};

export default Swipeable;

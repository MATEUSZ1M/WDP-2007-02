import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

const Swipeable = props => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(props.activePage, 400);
    }
  });

  const params = {
    spaceBetween: 30,
    grabCursor: true,
    on: {
      slidePrevTransitionStart: () => {
        props.rightAction(swiperRef.current.swiper.activeIndex);
      },
      slideNextTransitionStart: () => {
        props.leftAction(swiperRef.current.swiper.activeIndex);
      },
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
  activePage: PropTypes.func,
};

export default Swipeable;
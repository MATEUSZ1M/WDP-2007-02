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
      slidePrevTransitionStart: props.rightAction,
      slideNextTransitionStart: props.leftAction,
    },
    effect: 'cube',
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
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
};

export default Swipeable;

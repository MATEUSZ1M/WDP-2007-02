import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

const Swipeable = props => {
  const params = {
    spaceBetween: 30,
    grabCursor: true,
    on: {
      slideNextTransitionEnd: () => {
        props.leftAction();
      },
      slidePrevTransitionEnd: () => {
        props.rightAction();
      },
    },
  };

  return <Swiper {...params}>{props.children}</Swiper>;
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;

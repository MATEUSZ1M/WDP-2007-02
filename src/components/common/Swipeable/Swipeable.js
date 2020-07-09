import React from 'react';
import PropTypes from 'prop-types';

import { Swipeable as Swipe } from 'react-swipeable';

const Swipeable = props => {
  return (
    <Swipe onSwipedLeft={props.leftAction} onSwipedRight={props.rightAction}>
      {props.children}
    </Swipe>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  activePage: PropTypes.number,
};

export default Swipeable;

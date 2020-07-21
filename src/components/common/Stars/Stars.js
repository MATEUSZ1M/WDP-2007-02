import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Stars.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Stars = ({ id, stars, userStars, ...props }) => {
  const [hover, setHover] = useState(null);
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => {
        let count = stars;
        if (userStars) {
          count = userStars;
        }
        if (hover) {
          count = hover;
        }
        return (
          <a key={i} href='/#' className={userStars ? styles.userStars : ''}>
            {i <= count ? (
              <FontAwesomeIcon
                onMouseOver={() => {
                  setHover(i);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
                onClick={event => {
                  event.preventDefault();
                  return props.changeUserStars(id, i);
                }}
                icon={faStar}
              >
                {i} stars
              </FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                onMouseOver={() => {
                  setHover(i);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
                onClick={event => {
                  event.preventDefault();
                  return props.changeUserStars(id, i);
                }}
                icon={farStar}
              >
                {i} stars
              </FontAwesomeIcon>
            )}
          </a>
        );
      })}
    </div>
  );
};

Stars.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  changeUserStars: PropTypes.func,
  userStars: PropTypes.number,
};

export default Stars;

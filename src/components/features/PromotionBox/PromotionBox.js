import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotionBox.module.scss';

class PromotionBox extends React.Component {
  render() {
    const { promotion } = this.props;
    return (
      <div>
        {promotion.map(image => (
          <div key={image.id}>
            <img src={image.img} alt={image.name} />
          </div>
        ))}
      </div>
    );
  }
}

PromotionBox.propTypes = {
  promotion: PropTypes.array,
};

PromotionBox.defaultProps = {};

export default PromotionBox;

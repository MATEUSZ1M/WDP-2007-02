import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotionBox.module.scss';

import PromotionItem from '../../common/PromotionItem/PromotionItem';

class PromotionBox extends React.Component {
  render() {
    const { promotion } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row ' + styles.promoContainer}>
            {promotion.map(image => (
              <PromotionItem key={image.id} {...image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

PromotionBox.propTypes = {
  promotion: PropTypes.array,
};

export default PromotionBox;

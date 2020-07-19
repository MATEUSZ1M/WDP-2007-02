import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotionItem.module.scss';

class PromotionItem extends React.Component {
  render() {
    const { name, img, title, promo } = this.props;

    return (
      <div className={styles.imageBox}>
        <img src={img} alt={name} className={styles.promoImage} />
        <aside className={styles.textBox}>
          <span>{name}</span>
          <span>{title}</span>
          <span>{promo}</span>
        </aside>
      </div>
    );
  }
}

PromotionItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  promo: PropTypes.string,
};

export default PromotionItem;

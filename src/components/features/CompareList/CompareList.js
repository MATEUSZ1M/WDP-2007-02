import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompareList.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

class CompareList extends React.Component {
  render() {
    const { compareList, changeCompareList } = this.props;
    return (
      <div
        className={styles.root + ' ' + (compareList.length > 0 ? styles.root_show : '')}
      >
        {compareList.map(product => (
          <div key={product.id} className={styles.photo}>
            <img alt={product.name} src={product.img} />
            <Button
              className={styles.button}
              variant='small'
              onClick={event => {
                event.preventDefault();
                return changeCompareList(product.id);
              }}
            >
              <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
            </Button>
          </div>
        ))}
        <div className={styles.button_compare}>
          <Button variant='main'>COMPARE PRODUCTS</Button>
        </div>
      </div>
    );
  }
}

CompareList.propTypes = {
  compareList: PropTypes.array,
  changeCompareList: PropTypes.func,
};

export default CompareList;

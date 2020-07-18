import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

class Brands extends React.Component {
  state = {
    activePage: 0,
    manualPageChange: false,
  };

  handlePageChange = newPage => {
    this.setState({ activePage: newPage, manualPageChange: true });
  };

  handleRightAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  };

  handleLeftAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else {
      this.setState({ activePage: activePage + 1 });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.device !== this.props.device) {
      this.setState({ activePage: 0 });
    }
  }

  render() {
    const { brands, device } = this.props;
    const { activePage } = this.state;

    const elementsPerDevice = device === 'mobile' ? 2 : device === 'tablet' ? 3 : 6;

    const pagesCount = Math.ceil(brands.length / elementsPerDevice);

    const swipeContent = [];
    for (let page = 0; page < pagesCount; page++) {
      swipeContent.push(
        <div key={page} className={styles.logoFrame}>
          {brands
            .slice(page * elementsPerDevice, (page + 1) * elementsPerDevice)
            .map(item => (
              <div key={item.id} className={styles.logo}>
                <img src={item.logo} alt={item.name} />
              </div>
            ))}
        </div>
      );
    }

    const pageDecrease = () => {
      if (activePage > 0) {
        this.handlePageChange(activePage - 1);
      }
    };

    const pageIncrease = () => {
      if (activePage === pagesCount - 1) {
        return;
      } else {
        this.handlePageChange(activePage + 1);
      }
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <div className={styles.control} onClick={pageDecrease}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
            </div>

            <div className={styles.logoBox}>
              <Swipeable
                activePage={this.state.activePage}
                rightAction={this.handleRightAction}
                leftAction={this.handleLeftAction}
              >
                {swipeContent}
              </Swipeable>
            </div>

            <div className={styles.control} onClick={pageIncrease}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      logo: PropTypes.string,
    })
  ),
  device: PropTypes.string,
};

export default Brands;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './SimpleGallery.module.scss';

import Swipeable from '../Swipeable/Swipeable';
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

class SimpleGallery extends React.Component {
  state = {
    activePage: 0,
    fade: false,
  };

  handlePrivPage = () => {
    const { activePage } = this.state;
    if (activePage > 0) {
      this.setState({ fade: true });
      setTimeout(() => this.setState({ activePage: activePage - 1, fade: false }), 100);
    }
  };

  handleNextPage = () => {
    const { activePage } = this.state;
    if (activePage < this.props.banners.length - 1) {
      this.setState({ fade: true });
      setTimeout(() => this.setState({ activePage: activePage + 1, fade: false }), 100);
    }
  };

  render() {
    const { banners } = this.props;
    return (
      <React.Fragment>
        <div className={styles.swipe}>
          <Swipeable
            activePage={this.state.activePage}
            noSwiping={true}
            grabCursor={false}
          >
            {banners.map(item => (
              <div
                key={item.id}
                className={
                  styles.image +
                  ' ' +
                  (this.state.fade ? styles.fadeOut : styles.fadeIn)
                }
              >
                <img src={item.url} alt={item.name} />
                <div className={styles.imageHover}>
                  <div className={styles.title}>
                    <h4>
                      indoor <span>Furniture</span>
                    </h4>
                    <div className={styles.subtitle}>
                      save up to 50% of all furniture
                    </div>
                  </div>
                  <Button className={styles.shopNow}>SHOP NOW</Button>
                </div>
              </div>
            ))}
          </Swipeable>
        </div>
        <div>
          <Button
            onClick={event => {
              event.preventDefault();
              return this.handlePrivPage();
            }}
            className={styles.button}
            variant='small'
          >
            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
          </Button>
          <Button
            onClick={event => {
              event.preventDefault();
              return this.handleNextPage();
            }}
            className={styles.button}
            variant='small'
          >
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

SimpleGallery.propTypes = {
  banners: PropTypes.array,
};

export default SimpleGallery;

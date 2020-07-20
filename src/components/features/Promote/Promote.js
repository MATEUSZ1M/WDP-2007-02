import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promote.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Swipeable from '../../common/Swipeable/Swipeable';
import HotDeal from '../../common/HotDeal/HotDealContainer';
import Button from '../../common/Button/Button';

class Promote extends React.Component {
  state = {
    autoplay: true,
    leftActivePage: 0,
    leftFade: false,
    leftManualPageChange: false,
    rightActivePage: 0,
    rightFade: false,
  };

  leftHandlePageChange(newPage) {
    this.setState({ leftFade: true });
    setTimeout(
      () =>
        this.setState({
          leftActivePage: newPage,
          leftFade: false,
          leftManualPageChange: true,
          autoplay: false,
        }),
      100
    );
  }

  leftHandleRightAction = () => {
    const { leftActivePage, leftManualPageChange } = this.state;
    if (leftManualPageChange) {
      this.clearAutoplayTimeout();
      this.setState({ leftManualPageChange: false });
    } else if (leftActivePage > 0) {
      this.clearAutoplayTimeout();
      this.setState({ leftActivePage: leftActivePage - 1, autoplay: false });
    }
  };

  leftHandleLeftAction = () => {
    const { leftActivePage, leftManualPageChange } = this.state;
    if (leftManualPageChange) {
      this.clearAutoplayTimeout();
      this.setState({ leftManualPageChange: false });
    } else {
      this.clearAutoplayTimeout();
      this.setState({ leftActivePage: leftActivePage + 1, autoplay: false });
    }
  };

  handlePrivPage = () => {
    const { rightActivePage } = this.state;
    if (rightActivePage > 0) {
      this.setState({ rightFade: true });
      setTimeout(
        () => this.setState({ rightActivePage: rightActivePage - 1, rightFade: false }),
        100
      );
    }
  };

  handleNextPage = () => {
    const { rightActivePage } = this.state;
    if (rightActivePage < this.props.banners.length - 1) {
      this.setState({ rightFade: true });
      setTimeout(
        () => this.setState({ rightActivePage: rightActivePage + 1, rightFade: false }),
        100
      );
    }
  };

  setAutoplay() {
    if (this.autoplay === undefined) {
      this.setState({
        autoplay: true,
      });
      this.autoplay = setInterval(() => {
        const { leftActivePage } = this.state;
        if (leftActivePage < 2) {
          this.setState({ leftFade: true });
          setTimeout(
            () =>
              this.setState({
                leftActivePage: leftActivePage + 1,
                leftFade: false,
                leftManualPageChange: true,
              }),
            100
          );
        } else {
          this.setState({ leftFade: true });
          setTimeout(
            () =>
              this.setState({
                leftActivePage: 0,
                leftFade: false,
                leftManualPageChange: true,
              }),
            100
          );
        }
      }, 3000);
    }
  }

  clearAutoplayTimeout() {
    if (this.autoplayTimeout !== undefined) {
      clearTimeout(this.autoplayTimeout);
      this.autoplayTimeout = undefined;
    }
  }

  componentDidMount() {
    this.setAutoplay();
  }

  componentDidUpdate() {
    if (!this.state.autoplay && this.autoplayTimeout === undefined) {
      clearInterval(this.autoplay);
      this.autoplay = undefined;
      this.autoplayTimeout = setTimeout(() => this.setAutoplay(), 7000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.autoplay);
    this.autoplay = undefined;
  }

  render() {
    const { products, banners } = this.props;
    const { leftActivePage } = this.state;
    const categoryProducts = products.filter(item => item.hotDeal === true);

    const dots = [];
    for (let i = 0; i < categoryProducts.length; i++) {
      dots.push(
        <li>
          <a
            href='/#'
            onClick={event => {
              event.preventDefault();
              return this.leftHandlePageChange(i);
            }}
            className={i === leftActivePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row ' + styles.promote}>
            <div className={'col-4 ' + styles.leftPanel}>
              <div className={'col-auto ' + styles.heading}>
                <h3>Hot Deals</h3>
                <div className={'col-12 col-lg-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
              <Swipeable
                activePage={this.state.leftActivePage}
                rightAction={this.leftHandleRightAction}
                leftAction={this.leftHandleLeftAction}
              >
                {categoryProducts.map(item => (
                  <div
                    key={item.id}
                    className={this.state.leftFade ? styles.fadeOut : styles.fadeIn}
                  >
                    <HotDeal {...item} />
                  </div>
                ))}
              </Swipeable>
            </div>
            <div className={'col-8 ' + styles.rightPanel}>
              <div className={styles.swipe}>
                <Swipeable
                  activePage={this.state.rightActivePage}
                  params={{
                    noSwiping: true,
                    grabCursor: false,
                  }}
                >
                  {banners.map(item => (
                    <div
                      key={item.id}
                      className={
                        styles.image +
                        ' ' +
                        (this.state.rightFade ? styles.fadeOut : styles.fadeIn)
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promote.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  banners: PropTypes.array,
};

export default Promote;

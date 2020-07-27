import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promote.module.scss';

import Swipeable from '../../common/Swipeable/Swipeable';
import SimpleGallery from '../../common/SimpleGallery/SimpleGalleryContainer';
import HotDeal from '../../common/HotDeal/HotDealContainer';

class Promote extends React.Component {
  state = {
    autoplay: true,
    leftActivePage: 0,
    leftFade: false,
    leftManualPageChange: false,
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

  setAutoplay() {
    if (this.autoplay === undefined) {
      this.setState({
        autoplay: true,
      });
      this.autoplay = setInterval(() => {
        const { leftActivePage } = this.state;
        if (leftActivePage < this.categoryProducts.length - 1) {
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
    const { products } = this.props;
    const { leftActivePage } = this.state;
    this.categoryProducts = products.filter(item => item.hotDeal === true);

    const dots = [];
    for (let i = 0; i < this.categoryProducts.length; i++) {
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
            <div className={'col-md-4 ' + styles.leftPanel}>
              <div className={'col-auto ' + styles.heading}>
                <h3>Hot Deals</h3>
                <div className={'col-md-7 col-lg-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
              <Swipeable
                activePage={this.state.leftActivePage}
                rightAction={this.leftHandleRightAction}
                leftAction={this.leftHandleLeftAction}
              >
                {this.categoryProducts.map(item => (
                  <div
                    key={item.id}
                    className={this.state.leftFade ? styles.fadeOut : styles.fadeIn}
                  >
                    <HotDeal {...item} />
                  </div>
                ))}
              </Swipeable>
            </div>
            <div className={'col-sm-12 col-md-8 ' + styles.rightPanel}>
              <SimpleGallery />
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
};

export default Promote;

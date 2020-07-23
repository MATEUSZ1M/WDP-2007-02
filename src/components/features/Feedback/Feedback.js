import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

class Feedback extends React.Component {
  state = {
    activePage: 0,
    fade: false,
  };

  handlePageChange(newPage) {
    this.setState({ fade: true });
    setTimeout(
      () => this.setState({ activePage: newPage, fade: false, manualPageChange: true }),
      100
    );
  }

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

  render() {
    const { feedbacks } = this.props;
    const { activePage, fade } = this.state;

    const dots = [];
    for (let i = 0; i < feedbacks.length; i++) {
      dots.push(
        <li>
          <a
            href='/#'
            onClick={event => {
              event.preventDefault();
              return this.handlePageChange(i);
            }}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        {feedbacks && (
          <div className='container'>
            <div className={styles.panel}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Client feedback</h3>
                </div>
                <div className={'col-12 col-lg-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <Swipeable
              activePage={this.state.activePage}
              rightAction={this.handleRightAction}
              leftAction={this.handleLeftAction}
            >
              {feedbacks.map(item => (
                <div
                  className={'row ml-0 ' + (fade ? styles.fadeOut : styles.fadeIn)}
                  key={item.id}
                >
                  <div className={'col ' + styles.quote}>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className={styles.quotes}
                    ></FontAwesomeIcon>
                    <blockquote key={item.id} className={styles.feedback}>
                      {item.opinion}
                    </blockquote>
                    <div className={styles.user}>
                      <div className={styles.userImage}>
                        <img src={item.image} alt={item.status}></img>
                      </div>
                      <div className={styles.name}>
                        <h4>{item.name}</h4>
                        <p>{item.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Swipeable>
          </div>
        )}
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string,
      image: PropTypes.string,
      opinion: PropTypes.string,
    })
  ),
};

export default Feedback;

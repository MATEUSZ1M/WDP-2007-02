import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  state = {
    activePageFeedback: 0,
  };
  render() {
    const { feedbacks } = this.props;
    return (
      <div className={styles.root}>
        {feedbacks[0] && (
          <div className='container'>
            <div className={styles.panel}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Client feedback</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>
                    <li>
                      <a className={styles.active} href='#'>
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href='#'> </a>
                    </li>
                    <li>
                      <a href='#'> </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className={'col ' + styles.quote}>
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className={styles.quotes}
                ></FontAwesomeIcon>
                <blockquote className={styles.feedback}>
                  {feedbacks[0].opinion}
                </blockquote>
                <div className={styles.user}>
                  <div className={styles.userImage}>
                    <img src={feedbacks[0].image} alt={feedbacks[0].status}></img>
                  </div>
                  <div className={styles.name}>
                    <h4>{feedbacks[0].name}</h4>
                    <p>{feedbacks[0].status}</p>
                  </div>
                </div>
              </div>
            </div>
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

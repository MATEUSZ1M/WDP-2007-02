import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

class Feedback extends React.Component {
  render() {
    const { feedbacks } = this.props;

    return (
      <div className={styles.root}>
        {feedbacks && (
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
            <Swipeable>
              {feedbacks.map(item => (
                <div className='row' key={item.id}>
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

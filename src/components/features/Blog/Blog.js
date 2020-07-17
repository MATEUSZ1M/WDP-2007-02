import React from 'react';
import PropTypes from 'prop-types';
import styles from './Blog.module.scss';
import Button from '../../common/Button/Button';
import { faComments, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blog = ({ date, comments, text, image, imageTitle, title }) => {
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.row}>
          <div className={styles.images}>
            <img src={image} alt={imageTitle} />
            <div className={styles.options}>
              <div className={styles.date}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faCalendarAlt}
                ></FontAwesomeIcon>{' '}
                {date}
              </div>
              <div className={styles.comments}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faComments}
                ></FontAwesomeIcon>{' '}
                {comments.length}
                {comments}
              </div>
            </div>
          </div>
          <div className={styles.postWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p>{text}</p>
            <div>
              <Button className={styles.buttonFirst}>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  date: PropTypes.string,
  comments: PropTypes.number,
  text: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  imageTitle: PropTypes.string,
};

export default Blog;

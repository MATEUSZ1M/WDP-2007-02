import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';
import styles from './BlogPost.module.scss';
import Blog from '../../features/Blog/Blog';
import Swipeable from '../../common/Swipeable/Swipeable';

const BlogPost = ({ posts }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panel}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Latest Blog</h3>
            </div>
            <div className={'col ' + styles.menu}></div>
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
          <div className={styles.blog}>
            {posts.map(post => {
              return <Blog {...post} key={post.id} />;
            })}
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  posts: PropTypes.array,
};
export default BlogPost;

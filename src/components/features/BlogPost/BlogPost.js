import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogPost.module.scss';
import Blog from '../../features/Blog/Blog';
import Swipeable from '../../common/Swipeable/Swipeable';

class BlogPost extends React.Component {
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

  componentDidUpdate(prevProps) {
    if (prevProps.device !== this.props.device) {
      this.setState({ activePage: 0 });
    }
  }

  render() {
    const { posts, device } = this.props;
    const { activePage, fade } = this.state;

    const elementsPerDevice = device === 'mobile' ? 1 : device === 'tablet' ? 2 : 3;

    const pagesCount = Math.ceil(posts.length / elementsPerDevice);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
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

    const swipeContent = [];
    for (let page = 0; page < pagesCount; page++) {
      swipeContent.push(
        <div
          key={page}
          className={'row ml-0 ' + (fade ? styles.fadeOut : styles.fadeIn)}
        >
          {posts
            .slice(page * elementsPerDevice, (page + 1) * elementsPerDevice)
            .map(post => (
              <div className='col-sm-12 col-md-6 col-lg-4' key={post.id}>
                <Blog {...post} key={post.id} />
              </div>
            ))}
        </div>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panel}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Latest Blog</h3>
              </div>
              <div className={'col ' + styles.menu}></div>
              <div className={'col-12 col-lg-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <Swipeable
            activePage={this.state.activePage}
            rightAction={this.handleRightAction}
            leftAction={this.handleLeftAction}
          >
            {swipeContent}
          </Swipeable>
        </div>
      </div>
    );
  }
}

BlogPost.propTypes = {
  posts: PropTypes.array,
  device: PropTypes.string,
};

BlogPost.defaultProps = {
  posts: [],
};

export default BlogPost;

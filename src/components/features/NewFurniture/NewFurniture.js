import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fade: false,
    manualPageChange: false,
  };

  handlePageChange(newPage) {
    this.setState({ fade: true });
    setTimeout(
      () => this.setState({ activePage: newPage, fade: false, manualPageChange: true }),
      100
    );
  }

  handleCategoryChange(newCategory) {
    this.setState({ fade: true });
    setTimeout(
      () => this.setState({ activeCategory: newCategory, fade: false, activePage: 0 }),
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

  // Check if device has changed and set Page to 1 if so.
  // This will eliminate a bug, when during increasing a width the user
  //  is on a page greater than total number of pages on larger device
  componentDidUpdate(prevProps) {
    if (prevProps.device !== this.props.device) {
      this.setState({ activePage: 0 });
    }
  }

  render() {
    const { categories, products, device } = this.props;
    const { activeCategory, activePage, fade } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const elementsPerDevice =
      device === 'smobile' ? 1 : device === 'mobile' ? 2 : device === 'tablet' ? 3 : 8;

    const pagesCount = Math.ceil(categoryProducts.length / elementsPerDevice);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            href='/#'
            onClick={() => this.handlePageChange(i)}
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
          {categoryProducts
            .slice(page * elementsPerDevice, (page + 1) * elementsPerDevice)
            .map(item => (
              <div key={item.id} className='col-6 col-md-4 col-lg-3 p-2'>
                <ProductBox {...item} />
              </div>
            ))}
        </div>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-12 col-sm ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        href='/#'
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
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
            {swipeContent}
          </Swipeable>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
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
  device: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;

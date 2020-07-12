import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CompareList from '../../features/CompareList/CompareListContainer';

class MainLayout extends React.Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    const { children } = this.props;
    window.addEventListener('resize', () =>
      this.setState({ width: window.innerWidth })
    );
    // console.log(this);
    return (
      <div>
        <Header />
        {children}
        <CompareList />
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;

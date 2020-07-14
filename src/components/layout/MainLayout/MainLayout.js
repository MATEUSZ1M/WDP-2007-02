import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CompareList from '../../features/CompareList/CompareListContainer';

class MainLayout extends React.Component {
  render() {
    const { children, setDevice } = this.props;
    setDevice(window.innerWidth);
    window.addEventListener('resize', () => setDevice(window.innerWidth));

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
  setDevice: PropTypes.func,
};

export default MainLayout;

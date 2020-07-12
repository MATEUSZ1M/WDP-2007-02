import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CompareList from '../../features/CompareList/CompareListContainer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <CompareList />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;

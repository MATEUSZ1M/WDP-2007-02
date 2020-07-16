import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotionBox from '../../features/PromotionBox/PromotionBoxContainer';
import Promote from '../../features/Promote/PromoteContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Brands from '../../features/Brands/BrandsContainer';
import BlogPost from '../../features/BlogPost/BlogPostContainer.js';

const Homepage = () => (
  <div className={styles.root}>
    <Promote />
    <FeatureBoxes />
    <PromotionBox />
    <NewFurniture />
    <BlogPost />
    <Gallery />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;

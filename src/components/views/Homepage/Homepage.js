import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promote from '../../features/Promote/PromoteContainer';
import Feedbacks from '../../features/Feedback/FeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promote />
    <FeatureBoxes />
    <NewFurniture />
    <Feedbacks />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;

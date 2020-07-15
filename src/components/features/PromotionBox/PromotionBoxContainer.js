import { connect } from 'react-redux';

import PromotionBox from './PromotionBox';

import { getAll } from '../../../redux/promotionRedux';

const mapStateToProps = state => ({
  promotion: getAll(state),
});

export default connect(mapStateToProps)(PromotionBox);

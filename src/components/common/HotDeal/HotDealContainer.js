import { connect } from 'react-redux';
import HotDeal from './HotDeal';

import { changeWishlist, changeCompareList } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  changeWishlist: id => dispatch(changeWishlist(id)),
  changeCompareList: id => dispatch(changeCompareList(id)),
});

export default connect(null, mapDispatchToProps)(HotDeal);

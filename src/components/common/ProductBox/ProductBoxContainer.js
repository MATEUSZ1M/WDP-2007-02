import { connect } from 'react-redux';
import ProductBox from './ProductBox';

import {
  changeWishlist,
  changeCompareList,
  changeUserStars,
} from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  changeWishlist: id => dispatch(changeWishlist(id)),
  changeCompareList: id => dispatch(changeCompareList(id)),
  changeUserStars: (id, star) => dispatch(changeUserStars({ id: id, star: star })),
});

export default connect(null, mapDispatchToProps)(ProductBox);

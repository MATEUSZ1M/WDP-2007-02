import { connect } from 'react-redux';
import ProductBox from './ProductBox';

import { changeWishlist } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  changeWishlist: id => dispatch(changeWishlist(id)),
});

export default connect(null, mapDispatchToProps)(ProductBox);

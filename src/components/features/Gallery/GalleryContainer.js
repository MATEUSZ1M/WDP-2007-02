import { connect } from 'react-redux';

import Gallery from './Gallery';

import {
  getFeatured,
  getTopSeller,
  getSale,
  getTopRated,
} from '../../../redux/productsRedux.js';
import { changeWishlist, changeCompareList } from '../../../redux/productsRedux';
import { getGalleryCategory } from '../../../redux/categoriesRedux';
import { getDevice } from '../../../redux/deviceRedux.js';

const mapStateToProps = state => ({
  featured: getFeatured(state),
  topSeller: getTopSeller(state),
  saleOff: getSale(state),
  topRated: getTopRated(state),
  categories: getGalleryCategory(state),
  device: getDevice(state),
});

const mapDispatchToProps = dispatch => ({
  changeWishlist: id => dispatch(changeWishlist(id)),
  changeCompareList: id => dispatch(changeCompareList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

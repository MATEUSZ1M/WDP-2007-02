import { connect } from 'react-redux';

import Gallery from './Gallery';

import {
  getNew,
  getFeatured,
  getTopSeller,
  getSale,
  getTopRated,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
  featured: getFeatured(state),
  topSeller: getTopSeller(state),
  saleOff: getSale(state),
  topRated: getTopRated(state),
});

export default connect(mapStateToProps)(Gallery);

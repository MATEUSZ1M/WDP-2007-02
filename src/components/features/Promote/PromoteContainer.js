import { connect } from 'react-redux';

import Promote from './Promote';

import { getNew } from '../../../redux/productsRedux.js';
import { getAll } from '../../../redux/bannerRedux';

const mapStateToProps = state => ({
  products: getNew(state),
  banners: getAll(state),
});

export default connect(mapStateToProps)(Promote);

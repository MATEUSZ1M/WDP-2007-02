import { connect } from 'react-redux';

import Promote from './Promote';

import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
});

export default connect(mapStateToProps)(Promote);

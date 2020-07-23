import Brands from './Brands';
import { connect } from 'react-redux';
import { getAllBrands } from '../../../redux/brandsRedux';
import { getDevice } from '../../../redux/deviceRedux.js';

const mapStateToProps = state => ({
  brands: getAllBrands(state),
  device: getDevice(state),
});

export default connect(mapStateToProps)(Brands);

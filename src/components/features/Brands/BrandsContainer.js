import Brands from './Brands';
import { connect } from 'react-redux';
import { getAllBrands } from '../../../redux/brandsRedux';

const mapStateToProps = state => ({
  brands: getAllBrands(state),
});

export default connect(mapStateToProps)(Brands);

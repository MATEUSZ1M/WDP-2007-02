import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getDevice } from '../../../redux/deviceRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  device: getDevice(state),
});

export default connect(mapStateToProps)(NewFurniture);

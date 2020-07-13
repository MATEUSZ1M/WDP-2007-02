import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { setDevice } from '../../../redux/deviceRedux';

const mapDispatchToProps = dispatch => ({
  setDevice: width => dispatch(setDevice(width)),
});

export default connect(null, mapDispatchToProps)(MainLayout);

import { connect } from 'react-redux';

import SimpleGallery from './SimpleGallery';

import { getAll } from '../../../redux/bannerRedux';

const mapStateToProps = state => ({
  banners: getAll(state),
});

export default connect(mapStateToProps)(SimpleGallery);

import { connect } from 'react-redux';
import BlogPost from './BlogPost';
import { getDevice } from '../../../redux/deviceRedux.js';

const mapStateToProps = state => ({
  posts: state.posts,
  device: getDevice(state),
});

export default connect(mapStateToProps)(BlogPost);

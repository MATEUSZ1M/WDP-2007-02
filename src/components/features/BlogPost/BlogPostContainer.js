import { connect } from 'react-redux';
import BlogPost from './BlogPost';

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(BlogPost);

import { connect } from 'react-redux';
import Feedback from './Feedback';
import { getAllOpinions } from '../../../redux/feedbackRedux';

const mapStateToProps = state => ({
  feedbacks: getAllOpinions(state),
});

export default connect(mapStateToProps)(Feedback);

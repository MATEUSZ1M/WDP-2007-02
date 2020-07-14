import { connect } from 'react-redux';
import Stars from './Stars';

import { changeUserStars } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  changeUserStars: (id, star) => dispatch(changeUserStars({ id: id, star: star })),
});

export default connect(null, mapDispatchToProps)(Stars);

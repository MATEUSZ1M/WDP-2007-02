import { connect } from 'react-redux';
import CompareList from './CompareList';
import { getCompareList, changeCompareList } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  compareList: getCompareList(state),
});

const mapDispatchToProps = dispatch => ({
  changeCompareList: id => dispatch(changeCompareList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareList);

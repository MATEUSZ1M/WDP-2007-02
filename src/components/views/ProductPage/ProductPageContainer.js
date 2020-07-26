import { connect } from 'react-redux';
import ProductPage from './ProductPage';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filtered = state.products.filter(product => product.id == id);
  const listParams = filtered.length ? filtered[0] : { error: true };

  return {
    ...listParams,
  };
};
export default connect(mapStateToProps)(ProductPage);

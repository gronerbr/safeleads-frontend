import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import { deleteProduct } from '../../redux/modules/product';

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(deleteProduct(id)),
});

export default connect(null, mapDispatchToProps)(Product);

import { connect } from 'react-redux';
import ProductList from '../../components/ProductList/ProductList';
import { getProducts } from '../../redux/modules/productList';

const mapStateToProps = state => ({
  loading: state.products.loading,
  list: state.products.list,
});

const mapDispatchToProps = dispatch => ({
  getProducts: filter => dispatch(getProducts(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

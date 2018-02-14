import { connect } from 'react-redux';
import ProductList from '../../components/ProductList/ProductList';
import { getProductList, shortAdd } from '../../redux/modules/product';

const mapStateToProps = state => ({
  loading: state.products.loading,
  list: state.products.list,
});

const mapDispatchToProps = dispatch => ({
  getProducts: filter => dispatch(getProductList(filter)),
  shortAdd: product => dispatch(shortAdd(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

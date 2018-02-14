import { connect } from 'react-redux';
import ProductPage from '../../components/ProductPage/ProductPage';
import { getProduct, updateProduct, saveProduct } from '../../redux/modules/product';

const mapStateToProps = state => ({
  images: state.products.product.images,
  videos: state.products.product.videos,
  product: state.products.product,
});

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(getProduct(id)),
  updateProduct: patch => dispatch(updateProduct(patch)),
  saveProduct: product => dispatch(saveProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

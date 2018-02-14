import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Modal from 'material-ui/Modal';
import Checkbox from 'material-ui/Checkbox';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import { RotateSpinLoader } from 'react-css-loaders';
import AddIcon from 'material-ui-icons/Add';
import styles from './ProductList.scss';
import MasterPage from '../MasterPage/MasterPage';
import Product from '../../containers/Product/Product';

class ProductList extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    getProducts: PropTypes.func.isRequired,
    shortAdd: PropTypes.func.isRequired,
  };

  static defaultProps = {
    loading: true,
  }

  constructor(props) {
    super(props);
    this.state = {
      modalAddProduct: false,
      name: '',
      price: '',
      keepAdding: false,
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  handleModalClose() {
    this.setState({ modalAddProduct: false });
  }

  openAdd() {
    this.setState({ modalAddProduct: true });
  }

  handleAddChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleKeepAdding() {
    this.setState({ keepAdding: !this.state.keepAdding });
  }

  handleAddProduct() {
    this.props.shortAdd({
      name: this.state.name,
      price: this.state.price,
    });
    if (!this.state.keepAdding) {
      this.handleModalClose();
    }
  }

  render() {
    return (
      <MasterPage>
        <div className={styles.base}>
          <h1 className={styles.title}>Produtos</h1>
          <Card className={styles.card}>
            <CardContent>
              <Grid className={styles.textFieldWrapper} container spacing={40}>
                <Grid item md={5} xs={12}>
                  <TextField
                    id="search"
                    label="Nome"
                    type="search"
                    className={styles.textField}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    label="Preço"
                    type="search"
                    className={styles.textField}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button dense><b>FILTRAR</b></Button>
            </CardActions>
          </Card>
          { this.props.loading &&
            <Fragment>
              <RotateSpinLoader className={styles.loading} />
              <h3>Carregando</h3>
            </Fragment>
          }
          <Grid container spacing={40} className={styles.cardsWrapper}>
            { this.props.loading ||
              this.props.list.map(product => (
                <Product
                  key={product.id}
                  id={product.id}
                  img={product.images && product.images[0] && product.images[0].src}
                  name={product.name}
                  year={product.year}
                  price={product.price}
                  desc={product.desc}
                />
              ))
            }
            { this.props.list.length === 0 && !this.props.loading &&
              <Grid item md={12} xs={12}>
                <h2>Nenhum produto encontrado</h2>
              </Grid>
            }
          </Grid>
        </div>
        <div className={styles.addBtn}>
          <Button
            fab
            color="primary"
            aria-label="add"
            onClick={() => this.openAdd()}
          >
            <AddIcon />
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            onClose={() => this.handleModalClose()}
            open={this.state.modalAddProduct}
          >
            <div className={styles.modalContent}>
              <Card>
                <CardContent>
                  <h3>Novo produto</h3>
                  <form className={styles.shortAddFrm}>
                    <TextField
                      id="productName"
                      name="name"
                      label="Nome do produto"
                      type="text"
                      onChange={evt => this.handleAddChange(evt)}
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      id="productPrice"
                      label="Preço"
                      name="price"
                      onChange={evt => this.handleAddChange(evt)}
                      type="text"
                      margin="normal"
                      fullWidth
                    />
                    <Checkbox
                      id="keepAdding"
                      defaultChecked={this.state.keepAdding}
                      onChange={() => this.handleKeepAdding()}
                    />
                    { /* eslint-disable */ }
                    <label htmlFor="keepadding">
                      Continuar adicionando
                    </label>
                    { /* eslint-enable */ }
                  </form>
                </CardContent>
                <CardActions>
                  <Button onClick={() => this.handleModalClose()}>CANCELAR</Button>
                  <Button
                    onClick={evt => this.handleAddProduct(evt)}
                  >
                    ADICIONAR
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Modal>
        </div>
      </MasterPage>
    );
  }
}

export default ProductList;

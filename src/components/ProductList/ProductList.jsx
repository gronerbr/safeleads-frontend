import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
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
    isMenuOpen: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    getProducts: PropTypes.func.isRequired,
  };

  static defaultProps = {
    loading: true,
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <MasterPage>
        <div className={`${styles.base} ${this.props.isMenuOpen && styles.baseXsMenuOpen}`}>
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
                  img={product.img}
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
          <Button fab color="primary" aria-label="add">
            <AddIcon />
          </Button>
        </div>
      </MasterPage>
    );
  }
}

export default ProductList;

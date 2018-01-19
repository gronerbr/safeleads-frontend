/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import styles from './ProductList.scss';
import MasterPage from '../MasterPage/MasterPage';
import imgPlaceholder from '../../img/car-placeholder.jpg';

class ProductList extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
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
          { this.props.loading ||
            <Grid container spacing={40}>
              <Grid item md={6} xs={12}>
                <Card className={styles.cardProduct}>
                  <CardMedia
                    className={styles.media}
                    image={imgPlaceholder}
                    title="Contemplative Reptile"
                  />
                  <CardContent className={styles.relative}>
                    <div className={styles.hoverImg}>
                      <h1 className={styles.productName}>Fusion</h1>
                      <h6 className={styles.productYear}>2014/2015</h6>
                    </div>
                    <Typography className={styles.tal} type="headline" component="h2">
                      Lizard
                    </Typography>
                    <Typography className={styles.tal} component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button dense color="primary">
                      EDITAR
                    </Button>
                    <Button dense color="primary">
                      DELETAR
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={6} xs={12}>
                <Card className={styles.cardProduct}>
                  <CardMedia
                    className={styles.media}
                    image={imgPlaceholder}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography type="headline" component="h2">
                      Lizard
                    </Typography>
                    <Typography component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button dense color="primary">
                      EDITAR
                    </Button>
                    <Button dense color="primary">
                      DELETAR
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          }
        </div>
      </MasterPage>
    );
  }
}

export default ProductList;

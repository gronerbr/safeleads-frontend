import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Card, { CardMedia, CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import styles from './Product.scss';
import toBrl from '../../utils/toBrl';
import imgPlaceholder from '../../img/car-placeholder.jpg';

class Product extends Component {
  static propTypes = {
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    delete: PropTypes.func.isRequired,
    year: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
  };

  static defaultProps = {
    year: '',
    desc: '',
    img: imgPlaceholder,
  };

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      xeditable: false,
      name: this.props.name,
    };
  }

  onXeditableLeave() {
    this.setState({
      xeditable: false,
    });
  }

  xeditableStart() {
    this.setState({ xeditable: true });
  }

  handleModalClose() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <Grid item md={6} xs={12}>
        <Card className={styles.cardProduct}>
          <CardMedia
            className={styles.media}
            image={this.props.img}
          />
          <CardContent className={styles.relative}>
            <div className={styles.hoverImg}>
              <div
                role="presentation"
                onClick={evt => this.xeditableStart(evt)}
                onKeyDown={evt => this.xeditableStart(evt)}
              >
                { this.state.xeditable ||
                  <h1 className={styles.productName}>{this.state.name}</h1>
                }
                { this.state.xeditable &&
                  <TextField
                    className={styles.xeditableTitle}
                    onBlur={evt => this.onXeditableLeave(evt)}
                    onChange={evt => this.handleChange(evt)}
                    type="text"
                    name="name"
                    autoFocus
                    value={this.state.name}
                    margin="normal"
                    fullWidth
                  />
                }
              </div>
              <h6 className={styles.productYear}>{this.props.year}</h6>
            </div>
            <Typography className={styles.tal} type="headline" component="h2">
              {toBrl(this.props.price)}
            </Typography>
            <Typography className={styles.tal} component="p">
              {this.props.desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              dense
              color="primary"
            >
              EDITAR
            </Button>
            <Button
              dense
              color="primary"
              onClick={() => this.openModal()}
            >
              DELETAR
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              onClose={() => this.handleModalClose()}
              open={this.state.modalOpen}
            >
              <div className={styles.modalContent}>
                <Card>
                  <CardContent>
                    <h4>Certeza que deseja deletar este produto?</h4>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => this.handleModalClose()}>CANCELAR</Button>
                    <Button
                      onClick={() => {
                        this.props.delete(this.props.id);
                        this.handleModalClose();
                      }
                    }
                    >
                      DELETAR
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Modal>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}


export default Product;

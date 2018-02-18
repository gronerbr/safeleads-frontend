import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';
import UploadIcon from 'material-ui-icons/FileUpload';
import styles from './ProductPage.scss';
import imgPlaceholder from '../../img/car-placeholder.jpg';

const ListImages = props => (
  <Grid container className={styles.listImgGrid}>
    <Grid item xs={12} md={12}>
      <h1>Imagens</h1>
    </Grid>
    { props.list.map((image, index) => (
      <Grid item xs={12} md={3}>
        <Card>
          <CardMedia
            className={styles.imgThumb}
            image={image.src || imgPlaceholder}
          >
            <label className={styles.imgLabel} htmlFor={`imgFile${index}`}>
              <input
                id={`imgFile${index}`}
                onChange={evt => props.onUploadImg(evt, index)}
                type="file"
              />
              <div className={styles.showOnHover}>
                <UploadIcon />
              </div>
            </label>
          </CardMedia>
          <CardContent className={styles.itemDesc}>
            <Button
              fab
              color="primary"
              mini
              aria-label="remove"
              className={styles.removeItemBtn}
              onClick={() => props.onRemove(index)}
            >
              <RemoveIcon />
            </Button>
            <TextField
              label="Título"
              value={image.title}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={
                event => props.onChangeItem(event, index, 'title')
              }
            />
            <TextField
              label="Descrição"
              multiline
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              rowsMax="4"
              onChange={
                event => props.onChangeItem(event, index, 'desc')
              }
              value={image.desc}
              margin="normal"
            />
          </CardContent>
        </Card>
      </Grid>
    ))}
    <Grid item xs={12} md={3} className={styles.addImgWrapper}>
      <Button
        fab
        color="secondary"
        aria-label="add"
        onClick={() => props.onAddImage()}
      >
        <AddIcon />
      </Button>
    </Grid>
  </Grid>
);

ListImages.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddImage: PropTypes.func.isRequired,
};

export default ListImages;

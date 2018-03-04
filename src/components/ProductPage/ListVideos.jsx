import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';
import styles from './ProductPage.scss';
import imgPlaceholder from '../../img/car-placeholder.jpg';

const ListVideos = props => (
  <Grid container className={styles.listImgGrid}>
    <Grid item xs={12} md={12}>
      <h1>Vídeos</h1>
    </Grid>
    { props.list.map((video, index) => (
      <Grid item xs={12} md={3}>
        <Card>
          <CardMedia
            className={styles.imgThumb}
            image={video.thumbnail || imgPlaceholder}
          />
          <CardContent className={styles.itemDesc}>
            <Button
              variant="fab"
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
              value={video.title}
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
              rowsMax="4"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={
                event => props.onChangeItem(event, index, 'desc')
              }
              value={video.desc}
              margin="normal"
            />
            <TextField
              label="Link do youtube"
              value={video.youtube}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={
                event => props.onChangeItem(event, index, 'youtube')
              }
            />
          </CardContent>
        </Card>
      </Grid>
    ))}
    <Grid item xs={12} md={3} className={styles.addImgWrapper}>
      <Button
        variant="fab"
        aria-label="add"
        onClick={() => props.onAddVideo()}
      >
        <AddIcon />
      </Button>
    </Grid>
  </Grid>
);

ListVideos.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddVideo: PropTypes.func.isRequired,
};

export default ListVideos;

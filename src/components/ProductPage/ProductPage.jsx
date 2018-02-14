import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import ChatIcon from 'material-ui-icons/Chat';
import InsertPhotoIcon from 'material-ui-icons/InsertPhoto';
import AdIcon from 'material-ui-icons/ImportContacts';
import RemoveIcon from 'material-ui-icons/Remove';
import AddIcon from 'material-ui-icons/Add';
import UploadIcon from 'material-ui-icons/FileUpload';
import SaveIcon from 'material-ui-icons/Save';
import styles from './ProductPage.scss';
import MasterPage from '../MasterPage/MasterPage';
import imgPlaceholder from '../../img/car-placeholder.jpg';
import youtubeThumbnail from '../../utils/youtubeThumbnail';

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
        fab
        color="secondary"
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

const ListImage = props => (
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

ListImage.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddImage: PropTypes.func.isRequired,
};

class ProductPage extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    videos: PropTypes.arrayOf(PropTypes.object),
    getProduct: PropTypes.func,
    match: PropTypes.objectOf(PropTypes.objectOf(PropTypes.integer)).isRequired,
  }
  static defaultProps = {
    images: [],
    videos: [
      {
        thumbnail: '',
      },
    ],
    getProduct: () => {},
  }
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }
  /*eslint-disable*/
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getProduct(this.props.match.params.id);
  }
  addImage() {
    this.props.updateProduct({
      images: [...this.props.images, { title: '', desc: '' }],
    });
  }
  addVideo() {
    this.props.updateProduct({
      videos: [
        ...this.props.videos,
        {
          title: '',
          desc: '',
          youtube: '',
        },
      ],
    });
  }
  removeImage(index) {
    this.props.updateProduct({
      images: this.props.images.filter((img, _index) => {
        if (index === _index) {
          return false;
        }
        return true;
      }),
    });
  }
  removeVideo(index) {
    this.props.updateProduct({
      videos: this.props.videos.filter((img, _index) => {
        if (index === _index) {
          return false;
        }
        return true;
      }),
    });
  }
  handleImgChange(event, index, field) {
    this.props.updateProduct({
      images: this.props.images.map((img, _index) => {
        if (index === _index) {
          Object.assign(img, { [field]: event.target.value });
        }
        return img;
      }),
    });
  }
  handleImgUpload(evt, index){
    const reader = new FileReader();
    const selectedFile = evt.target.files[0];

    reader.onload = (evt) => {
      this.props.updateProduct({
        images: this.props.images.map((image, _index) => {
          if(index === _index){
            image.src = evt.target.result;
          }
          return image;
        })
      })
    };

    reader.readAsDataURL(selectedFile);
  }
  handleVideoChange(event, index, field) {
    this.props.updateProduct({
      videos: this.props.videos.map((video, _index) => {
        if (index === _index) {
          Object.assign(video, { [field]: event.target.value });
          if (youtubeThumbnail(video.youtube)) {
            Object.assign(video, { thumbnail: youtubeThumbnail(video.youtube) });
          } else {
            Object.assign(video, { thumbnail: '' });
          }
        }
        return video;
      }),
    });
  }
  handleTabChange = (event, value) => {
    this.setState({ value });
  }
  render() {
    return (
      <MasterPage>
        <div className={styles.base}>
          <h1 className={styles.title}>Produtos</h1>
          <AppBar position="static">
            <Tabs
              value={this.state.value}
              onChange={this.handleTabChange}
              scrollable
              scrollButtons="off"
            >
              <Tab label="Dados Gerais" icon={<ChatIcon />} />
              <Tab label="Mídia" icon={<InsertPhotoIcon />} />
              <Tab label="Anúncios" icon={<AdIcon />} />
            </Tabs>
          </AppBar>
          {this.state.value === 0 && <div>Item One</div>}
          {this.state.value === 1 &&
            <Fragment>
              <ListImage
                list={this.props.images}
                onAddImage={() => this.addImage()}
                onUploadImg={(evt, index) => this.handleImgUpload(evt, index)}
                onRemove={index => this.removeImage(index)}
                onChangeItem={(evt, index, field) => this.handleImgChange(evt, index, field)}
              />
              <ListVideos
                list={this.props.videos}
                onAddVideo={() => this.addVideo()}
                onRemove={index => this.removeVideo(index)}
                onChangeItem={(evt, index, field) => this.handleVideoChange(evt, index, field)}
              />
            </Fragment>
          }
          {this.state.value === 2 && <div>Item Three</div>}
        </div>
        <Button
          fab
          color="primary"
          aria-label="add"
          className={styles.saveBtn}
          onClick={() => this.props.saveProduct(this.props.product)}
        >
          <SaveIcon />
        </Button>
      </MasterPage>
    );
  }
}

export default ProductPage;

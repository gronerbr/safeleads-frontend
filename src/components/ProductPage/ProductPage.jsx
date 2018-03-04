import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import ChatIcon from 'material-ui-icons/Chat';
import InsertPhotoIcon from 'material-ui-icons/InsertPhoto';
import AdIcon from 'material-ui-icons/ImportContacts';
import SaveIcon from 'material-ui-icons/Save';
import styles from './ProductPage.scss';
import MasterPage from '../MasterPage/MasterPage';
import youtubeThumbnail from '../../utils/youtubeThumbnail';
import ListImages from './ListImages';
import ListVideos from './ListVideos';
import GeneralProductForm from './GeneralProductForm';

class ProductPage extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    videos: PropTypes.arrayOf(PropTypes.object),
    getProduct: PropTypes.func,
    match: PropTypes.objectOf(PropTypes.objectOf(PropTypes.integer)),
    product: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    updateProduct: PropTypes.func,
    saveProduct: PropTypes.func,
  }
  static defaultProps = {
    images: [],
    videos: [],
    match: { id: undefined },
    getProduct: () => {},
    saveProduct: () => {},
    updateProduct: () => {},
  }
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      isProductAdition: false,
    };
  }
  /*eslint-disable*/
  componentDidMount() {
    window.scrollTo(0, 0);
    const param = parseInt(this.props.match.params.id);
    if(isNaN(param)){
      this.setState({isProductAdition: true});
    } else {
      this.props.getProduct(param);
    }
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
  handleImgUpload(evt, index) {
    const reader = new FileReader();
    const selectedFile = evt.target.files[0];

    reader.onload = (evtInputFile) => {
      this.props.updateProduct({
        images: this.props.images.map((image, _index) => {
          if (index === _index) {
            Object.assign(image, { src: evtInputFile.target.result });
          }
          return image;
        }),
      });
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
  handleChangeProduct(evt) {
    const newProduct = Object.assign({}, this.props.product, {
      [evt.target.name]: evt.target.value,
    });
    this.props.updateProduct(newProduct);
  }

  handleProductAddition() {
    if(this.state.isProductAdition && !this.props.product.id) {
      this.props.addProduct(this.props.product);
    } else {
      this.props.saveProduct(this.props.product);
    }
  }
  handleTabChange = (event, value) => {
    this.setState({ tabIndex: value });
  }
  render() {
    return (
      <MasterPage>
        <div className={styles.base}>
          <h1 className={styles.title}>Produtos</h1>
          <Card>
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
            <div className={styles.tabContentWrapper}>
              <Fragment>
                {this.state.tabIndex === 0 &&
                  <GeneralProductForm
                    product={this.props.product}
                    onChangeProduct={evt => this.handleChangeProduct(evt)}
                  />
                }
                {this.state.tabIndex === 1 &&
                  <Fragment>
                    <ListImages
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
                      onChangeItem={
                        (evt, index, field) => this.handleVideoChange(evt, index, field)
                      }
                    />
                  </Fragment>
                }
                {this.state.tabIndex === 2 && <div>Item Three</div>}
              </Fragment>
            </div>
          </Card>
        </div>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className={styles.saveBtn}
          onClick={() => this.handleProductAddition() }
        >
          <SaveIcon />
        </Button>
      </MasterPage>
    );
  }
}

export default ProductPage;

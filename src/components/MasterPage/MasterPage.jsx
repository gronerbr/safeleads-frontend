import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from './MasterPage.scss';

class MasterPage extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: true,
    };
  }
  render() {
    return (
      <Fragment>
        <Header onToggleMenu={() => this.setState({ isMenuOpen: !this.state.isMenuOpen })} />
        <Grid container spacing={0}>
          <Grid className={this.state.isMenuOpen || styles.menuClosed} item xs={10} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={this.state.isMenuOpen ? 2 : 12} md={this.state.isMenuOpen ? 9 : 12}>
            { this.props.children }
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}


export default MasterPage;

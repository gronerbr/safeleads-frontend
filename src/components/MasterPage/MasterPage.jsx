import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from './MasterPage.scss';

class MasterPage extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
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
          <Grid
            className={!this.state.isMenuOpen ? styles.menuClosed : styles.menuOpen}
            item
            xs={10}
            md={2}
          >
            <Sidebar />
          </Grid>
          <Grid
            item
            className={styles.bgContent}
            xs={this.state.isMenuOpen ? 2 : 12}
            md={this.state.isMenuOpen ? 10 : 12}
          >
            <div className={`${this.state.isMenuOpen && styles.baseXsMenuOpen}`}>
              { this.props.children }
              <div className={styles.copyright}>Copyright SafeLeads</div>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}


export default MasterPage;

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Drawer from 'material-ui/Drawer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from './MasterPage.scss';

class MasterPage extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
  }
  constructor(props) {
    super(props);
    window.onresize = () => {
      this.setState({
        isSizeMenuOpen: (document.body.offsetWidth > 900),
      });
    };
    this.state = {
      isClickMenuOpen: false,
      isSizeMenuOpen: (document.body.offsetWidth > 900),
    };
  }
  handleMenuChange() {
    debugger;
  }
  render() {
    return (
      <Fragment>
        <Header onToggleMenu={() => this.setState({ isClickMenuOpen: true })} />
        <Grid container spacing={0}>
          <Grid
            className={styles.drawer}
            item
            xs={10}
            md={2}
          >
            <Drawer
              // open={this.state.isClickMenuOpen || this.state.isSizeMenuOpen}
              open
              variant="persistent"
              classes={{
                docked: {
                  flex: '0 0 auto',
                },
                paper: {
                  top: 100,
                },
              }}
              onClose={() => this.setState({ isClickMenuOpen: false })}
            >
              <Sidebar />
            </Drawer>
          </Grid>
          <Grid
            item
            className={styles.bgContent}
          >
            <div className={`${(this.state.isClickMenuOpen || this.state.isSizeMenuOpen) && styles.baseXsMenuOpen}`}>
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

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function MasterPage({ ...props }) {
  return (
    <Fragment>
      <Header />
      <Grid container spacing={0}>
        <Grid item xs={10} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={2} md={9}>
          { props.children }
        </Grid>
      </Grid>
    </Fragment>
  );
}

MasterPage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MasterPage;

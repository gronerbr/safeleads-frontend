import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import {
  HOME,
  LOGIN,
  PRODUCT,
  PRODUCT_LIST,
} from '../../utils/routeMap';
import { history } from '../../redux/create';
import Login from '../../containers/Login/Login';
import Dashboard from '../../components/Dashboard/Dashboard';
import ProductList from '../../containers/ProductList/ProductList';
import ProductPage from '../../containers/ProductPage/ProductPage';

// eslint-disable-next-line
class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={HOME} component={Dashboard} />
          <Route exact path={LOGIN} component={Login} />
          <Route exact path={PRODUCT_LIST} component={ProductList} />
          <Route exact path={PRODUCT} component={ProductPage} />
          {/* Route fallback */}
          <Route component={Login} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default Routes;

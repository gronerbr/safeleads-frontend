import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import {
  HOME,
  COUNTER,
  LOGIN,
} from '../../utils/routeMap';
import { history } from '../../redux/create';
import Counter from '../../containers/Counter/Counter';
import Login from '../../containers/Login/Login';

// eslint-disable-next-line
class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={HOME} component={Login} />
          <Route exact path={COUNTER} component={Counter} />
          <Route exact path={LOGIN} component={Login} />
          {/* Route fallback */}
          <Redirect to={LOGIN} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default Routes;

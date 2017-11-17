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
} from '../../utils/routeMap';
import { history } from '../../redux/create';
import Example from '../../components/Example/Example';
import Counter from '../../containers/Counter/Counter';

// eslint-disable-next-line
class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={HOME} component={Example} />
          <Route exact path={COUNTER} component={Counter} />
          {/* Route fallback */}
          <Redirect to={HOME} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default Routes;

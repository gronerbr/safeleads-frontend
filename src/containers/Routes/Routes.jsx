import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  HOME,
  COUNTER,
} from '../../utils/routeMap';
import Example from '../../components/Example/Example';
import Counter from '../../containers/Counter/Counter';

// eslint-disable-next-line
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={HOME} component={Example} />
        <Route exact path={COUNTER} component={Counter} />
        {/* Route fallback */}
        <Redirect to={HOME} />
      </Switch>
    );
  }
}

export default Routes;

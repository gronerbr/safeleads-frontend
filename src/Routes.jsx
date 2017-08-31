import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { history } from './store'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </ConnectedRouter>
)

export default Routes

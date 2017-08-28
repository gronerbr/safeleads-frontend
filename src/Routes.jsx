import React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const history = createHistory()

const Routes = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </ConnectedRouter>
)

export default Routes

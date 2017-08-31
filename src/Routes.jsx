import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const getHistory = (history) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </ConnectedRouter>
  )
}

export default getHistory

import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    applyMiddleware(middleware, thunk, logger)
  )
)

export default store

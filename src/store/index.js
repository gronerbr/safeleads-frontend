import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'

import {
  routerReducer,
  routerMiddleware
} from 'react-router-redux'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'

export const history = createHistory()

const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunk, middleware, logger)
  )
)

export default store

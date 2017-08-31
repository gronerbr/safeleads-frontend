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

import reducers from './reducers'

const getHistory = (history) => {
  const middleware = routerMiddleware(history)
  return createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    composeWithDevTools(
      applyMiddleware(thunk, middleware, logger)
    )
  )
}

export default getHistory

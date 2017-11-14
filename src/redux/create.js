import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './modules/reducer';

export default function createStore() {
  const middleware = [thunk, logger, routerMiddleware];
  const finalCreateStore = applyMiddleware(...middleware)(_createStore);
  const store = finalCreateStore(
    reducer,
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer')); //eslint-disable-line
    });
  }

  return store;
}

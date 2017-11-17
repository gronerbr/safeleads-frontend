import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import reducer from './modules/reducer';
import gaRouter from '../redux/middleware/ga-router';

export const history = createHistory();

const router = routerMiddleware(history);
const gaRouterWithUA = gaRouter(process.env.REACT_APP_GA_UA);

export default function createStore() {
  const middleware = [thunk, logger, router, gaRouterWithUA];
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

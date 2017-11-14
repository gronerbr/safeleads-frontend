import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import createStore from './redux/create';

import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
const store = createStore();

render(
  <Provider store={store} key="provider">
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}

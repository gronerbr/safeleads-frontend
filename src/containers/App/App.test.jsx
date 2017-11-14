import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import createStore from '../../redux/create';

const store = createStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store} key="provider">
      <App />
    </Provider>,
    div,
  );
});

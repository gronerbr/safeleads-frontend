import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import createStore from '../../redux/create';

const store = createStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Counter store={store} />, div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const props = {
  increment: () => {},
  decrement: () => {},
  decrementAsync: () => {},
  total: 0,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Counter props={props} />, div);
});

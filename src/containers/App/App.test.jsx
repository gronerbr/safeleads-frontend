import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from './App';
import createStore from '../../redux/create';

const store = createStore();

test('renders without crashing', () => {
  const component = renderer.create(<Provider store={store} key="provider">
    <MemoryRouter location="someLocation" context={{}}>
      <App />
    </MemoryRouter>
  </Provider>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

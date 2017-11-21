import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Counter from './Counter';
import createStore from '../../redux/create';

const store = createStore();

test('renders without crashing', () => {
  const component = renderer.create(
    <MemoryRouter location="someLocation" context={{}}>
      <Counter store={store} />
    </MemoryRouter>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

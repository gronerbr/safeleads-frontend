import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Example from './Example';

test('renders without crashing', () => {
  const component = renderer.create(
    <MemoryRouter location="someLocation" context={{}}>
      <Example />
    </MemoryRouter>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

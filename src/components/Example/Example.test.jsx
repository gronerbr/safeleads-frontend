import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Example from './Example';

describe('Example: ', () => {
  test('renders without crashing', () => {
    const component = renderer.create(
      <MemoryRouter location="someLocation" context={{}}>
        <Example />
      </MemoryRouter>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('When pass props:', () => {
    test('props.className should render a css class into the node', () => {
      const testClass = 'testClass';
      const exampleComponent = mount(
        <MemoryRouter location="someLocation" context={{}}>
          <Example className={testClass} />
        </MemoryRouter>);
      expect(exampleComponent.find('Example').hasClass(testClass)).toEqual(true);
    });
  });
});

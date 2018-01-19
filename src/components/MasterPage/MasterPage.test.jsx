import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MasterPage from './MasterPage';

describe('Example: ', () => {
  test('renders without crashing', () => {
    const component = shallow(
        <MasterPage>
          <h1>Test</h1>
        </MasterPage>
      );

    expect(toJson(component)).toMatchSnapshot();
  });
});

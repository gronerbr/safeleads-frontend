import reducer, { INCREMENT, increment as incrementActionCreator } from './counter';

/* Test examples based on https://hackernoon.com/redux-unit-testing-with-jest-f3a18f387f75 */

const expectedAction = {
  type: INCREMENT,
};

describe('Counter module actions', () => {
  it('should create an action INCREMENT to increment an number', () => {
    expect(incrementActionCreator()).toEqual(expectedAction);
  });
});

describe('Counter module reducer', () => {
  it('should handle INCREMENT', () => {
    const mockStore = {
      total: 0,
    };

    const updatedStore = {
      ...mockStore,
      total: mockStore.total + 1,
    };

    expect(reducer(
      mockStore,
      expectedAction,
    )).toEqual(updatedStore);
  });
});

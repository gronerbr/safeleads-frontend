import gaRouter from './ga-router';

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = y => y;

  const invoke = action => gaRouter(['UA-MOCK-123456'])(store)(next)(action);

  return { store, next, invoke };
};

it('calls the ga function when receive a router location change', () => {
  const { invoke } = create();
  window.gtag = jest.fn();
  const mock = {
    path: '/',
    hash: '#',
  };
  invoke({ type: '@@router/LOCATION_CHANGE', payload: mock });
  expect(window.gtag).toHaveBeenCalled();
});

it('return the action when dont receive location change action type', () => {
  const actionMock = { type: 'test' };
  const { invoke } = create();
  expect(invoke(actionMock)).toBe(actionMock);
});

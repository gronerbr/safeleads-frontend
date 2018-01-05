export const INCREMENT = 'boilerplate/INCREMENT';
export const DECREMENT = 'boilerplate/DECREMENT';

const defaultState = {
  total: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      // eslint-disable-next-line
      return { ...state, total: state.total + 1 };
    case DECREMENT:
      return { ...state, total: state.total - 1 };
    default:
      return state;
  }
};

export const decrement = () => ({
  type: DECREMENT,
});

export const decrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrement());
  }, 2000);
};

export const increment = () => ({
  type: INCREMENT,
});

export default reducer;

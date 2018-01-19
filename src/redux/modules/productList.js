export const FETCH_PRODUCT = 'product/FETCH_PRODUCT';
export const FETCH_SUCCESS = 'product/FETCH_SUCCESS';
export const FETCH_FAIL = 'product/FETCH_FAIL';

const defaultState = {
  products: [],
  loading: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      // eslint-disable-next-line
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      // eslint-disable-next-line
      return { ...state, loading: false };
    default:
      return state;
  }
};

export const productSuccess = payload => ({ type: FETCH_SUCCESS, payload });

export const productFetch = () => ({ type: FETCH_PRODUCT });

export const getProducts = filter => (dispatch) => {
  dispatch(productFetch());
  setTimeout(() => {
    dispatch(productSuccess(filter));
  }, 2000);
};

export default reducer;

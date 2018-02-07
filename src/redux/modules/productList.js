import axios from 'axios';

export const FETCH_PRODUCT = 'product/FETCH_PRODUCT';
export const FETCH_SUCCESS = 'product/FETCH_SUCCESS';
export const FETCH_FAIL = 'product/FETCH_FAIL';
export const DELETE_PRODUCT = 'product/DELETE_PRODUCT';
export const DELETE_SUCCESS_PRODUCT = 'product/DELETE_SUCCESS_PRODUCT';
export const DELETE_FAIL_PRODUCT = 'product/DELETE_FAIL_PRODUCT';
export const SHORTADD_SUCCESS = 'product/SHORTADD_SUCCESS';
export const SHORTADD_FAIL = 'product/SHORTADD_FAIL';
export const SHORTADD_START = 'product/SHORTADD_START';

const defaultState = {
  list: [],
  loading: false,
  loadingAdd: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case DELETE_SUCCESS_PRODUCT:
      return { ...state, list: action.list, loading: false };
    case SHORTADD_SUCCESS:
      return { ...state, list: [...state.list, action.payload], loadingAdd: false };
    default:
      return state;
  }
};

export const productSuccess = payload => ({ type: FETCH_SUCCESS, payload });

export const productError = err => ({ type: FETCH_FAIL, err });

export const productFetch = () => ({ type: FETCH_PRODUCT });

export const getProducts = () => (dispatch) => {
  dispatch(productFetch());
  axios.get(`${process.env.REACT_APP_WS_URL}/products`)
    .then((res) => {
      dispatch(productSuccess(res.data));
    })
    .catch((err) => {
      productError(err);
    });
};

export const deleteSuccess = (id) => {
  return (dispatch, getState) => {
    const newList = getState().products.list.filter((product) => {
      if (product.id !== id) {
        return product;
      }
      return false;
    });
    dispatch({ type: DELETE_SUCCESS_PRODUCT, list: newList });
  };
};

export const deleteError = { type: DELETE_FAIL_PRODUCT };

export const startDelete = { type: DELETE_PRODUCT };

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch(startDelete);
    axios.delete(`${process.env.REACT_APP_WS_URL}/products/${id}`)
      .then(() => {
        dispatch(deleteSuccess(id));
      })
      .catch(() => {
        dispatch(deleteError);
      });
  };
};

export const shortAddSuccess = payload => ({ type: SHORTADD_SUCCESS, payload });

export const shortAddError = err => ({ type: SHORTADD_FAIL, err });

export const shortAddStart = () => ({ type: SHORTADD_START });

export const shortAdd = product => (dispatch) => {
  dispatch(shortAddStart());
  axios.post(`${process.env.REACT_APP_WS_URL}/products`, product)
    .then((res) => {
      dispatch(shortAddSuccess(res.data));
    })
    .catch((err) => {
      shortAddError(err);
    });
};

export default reducer;

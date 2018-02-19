import axios from 'axios';

export const UPDATE_PRODUCT = 'product/UPDATE_PRODUCT';
export const FETCH_PRODUCT = 'product/FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'product/FETCH_PRODUCT_SUCCESS';
export const FETCH_LIST_SUCCESS = 'product/FETCH_LIST_SUCCESS';
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
  product: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, loading: true };
    case UPDATE_PRODUCT:
      return { ...state, product: { ...state.product, ...action.patch } };
    case FETCH_LIST_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, product: action.payload, loading: false };
    case DELETE_SUCCESS_PRODUCT:
      return { ...state, list: action.list, loading: false };
    case SHORTADD_SUCCESS:
      return { ...state, list: [...state.list, action.payload], loadingAdd: false };
    default:
      return state;
  }
};

export const productError = err => ({ type: FETCH_FAIL, err });

export const productFetch = () => ({ type: FETCH_PRODUCT });

export const productListSuccess = payload => ({ type: FETCH_LIST_SUCCESS, payload });

export const getProductList = () => (dispatch) => {
  dispatch(productFetch());
  axios.get(`${process.env.REACT_APP_WS_URL}/products`)
    .then((res) => {
      dispatch(productListSuccess(res.data));
    })
    .catch((err) => {
      productError(err);
    });
};

export const productSuccess = payload => ({ type: FETCH_PRODUCT_SUCCESS, payload });

export const getProduct = id => (dispatch) => {
  dispatch(productFetch());
  axios.get(`${process.env.REACT_APP_WS_URL}/products/${id}`)
    .then((res) => {
      dispatch(productSuccess(res.data));
    })
    .catch((err) => {
      productError(err);
    });
};

export const updateProduct = patch => ({ type: UPDATE_PRODUCT, patch });

export const setProductId = id => updateProduct({ id });

/*eslint-disable*/
export const saveProduct = product => dispatch => {
  axios.put(`${process.env.REACT_APP_WS_URL}/products/${product.id}`, product)
    .then((res) => {
    })
    .catch((err) => {

    })
}

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
      dispatch(setProductId(res.data.id));
    })
    .catch((err) => {
      shortAddError(err);
    });
};

export default reducer;

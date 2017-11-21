
const routerChanges = UA => () => next => (action) => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    const path = action.payload.pathname + action.payload.hash;

    if (window && window.gtag) {
      window.gtag('config', UA, {
        page_path: path,
      });
    }
  }

  return next(action);
};

export default routerChanges;

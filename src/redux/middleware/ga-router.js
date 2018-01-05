
/**
 * Send event to GA using gtag
 * @param {String} UA
 * @param {Object} action
 */
const sendGtagEvent = (UA, action = {}) => {
  if (!action.payload || !UA) return;

  const { payload } = action;
  const path = payload.pathname + payload.hash;

  window.gtag('config', UA, {
    page_path: path,
  });
};

const routerChanges = UAList => () => next => (action) => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    if (window && window.gtag) {
      UAList.forEach(item => sendGtagEvent(item, action));
    }
  }

  return next(action);
};


export default routerChanges;

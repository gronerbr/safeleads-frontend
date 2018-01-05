import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Fix Error:
 * "Solution to `It looks like you called `mount()` without a global document being loaded.`"
 */

if (process.env.NODE_ENV === 'test') {
  // eslint-disable-next-line
  var jsdom = require('jsdom').jsdom;
  // eslint-disable-next-line
  var exposedProperties = ['window', 'navigator', 'document'];

  global.document = jsdom('');
  global.window = document.defaultView;
  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property);
      global[property] = document.defaultView[property];
    }
  });

  global.navigator = {
    userAgent: 'node.js',
  };
}

// eslint-disable-next-line
const requestAnimationFrame = global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}

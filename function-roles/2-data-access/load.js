import { store } from '../store.js';

import { deepClone } from '../1-utils/deep-clone.js';

export const load = (data = {}) => {
  if (data === null || typeof data !== 'object') {
    throw new TypeError('data is not an object');
  }

  // log old state
  console.log(': old state:', store);

  // clear old data
  for (const key in store) {
    delete store[key];
  }

  // load new data
  console.log(': ... loading');
  for (const key in data) {
    const value = data[key];
    store[key] = deepClone(value);
  }

  // log new state
  console.log(': new state:', data);
};

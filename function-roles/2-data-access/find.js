import { store } from '../store.js';

import { deepClone } from '../1-utils/deep-clone.js';

export const find = (key = '') => {
  if (typeof key !== 'string') {
    throw new TypeError(`key is not a string`);
  }

  if (key in store) {
    const value = deepClone(store[key]);

    console.log(`: find "${key}":`, value);

    return value;
  } else {
    throw new ReferenceError(`cannot find: "${key}" is not in store`);
  }
};

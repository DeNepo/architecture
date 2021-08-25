import { store } from '../store.js';

import { deepClone } from '../1-utils/deep-clone.js';

export const insert = (key = '', value) => {
  if (typeof key !== 'string') {
    throw new TypeError(`key is not a string`);
  }

  if (key in store) {
    throw new ReferenceError(`cannot insert: "${key}" is already in store`);
  } else {
    console.log(`: insert "${key}":`, value);

    store[key] = deepClone(value);
  }
};

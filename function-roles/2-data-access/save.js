import { store } from '../store.js';

import { deepClone } from '../1-utils/deep-clone.js';

export const save = (key = '', value) => {
  if (typeof key !== 'string') {
    throw new TypeError(`key is not a string`);
  }

  if (key in store) {
    console.log(`: save "${key}":`, value);

    store[key] = deepClone(value);
  } else {
    throw new ReferenceError(`cannot save: "${key}" is not in store`);
  }
};

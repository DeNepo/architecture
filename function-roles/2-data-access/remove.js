import { store } from '../store.js';

export const remove = (key = '') => {
  if (typeof key !== 'string') {
    throw new TypeError(`key is not a string`);
  }

  if (key in store) {
    console.log(`: remove "${key}":`, store[key]);

    delete store[key];
  } else {
    throw new ReferenceError(`cannot remove: "${key}" is not in store`);
  }
};

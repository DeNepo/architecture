import { find } from '../data-access/find.js';

export const get = (key = '') => {
  // type-check the argument
  if (typeof key !== 'string') {
    throw new TypeError('key is not a string');
  }

  // return the found value
  return find(key);
};

import { store } from './local-storage/store.js';
import { state } from './state.js';
import { getItem } from './local-storage/get-item.js';

export const find = (key = '') => {
  if (key in store) {
    const value = getItem(key);

    console.groupCollapsed(`: find "${key}":`, value);
    console.trace('state:', state());
    console.groupEnd();

    return value;
  } else {
    throw new ReferenceError(`cannot find: key "${key}" does not exist`);
  }
};

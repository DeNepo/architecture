import { store } from './store.js';
import { getItem } from './get-item.js';

/**
 *
 * @param {*} log
 * @returns
 */
export const state = (log = false) => {
  const mergeObjects = (all, key) => {
    return { ...all, ...{ [key]: getItem(key) } };
  };

  const storeState = Object.keys(store).reduce(mergeObjects, {});

  if (log) {
    console.log(': state:', storeState);
  }

  return storeState;
};

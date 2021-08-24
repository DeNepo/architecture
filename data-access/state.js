import { store } from './local-storage/store.js';
import { getItem } from './local-storage/get-item.js';

export const state = (log = false) => {
  const storeState = Object.keys(store)
    .map((key) => ({ [key]: getItem(key) }))
    .reduce((next, all) => ({ ...all, ...next }), {});

  if (log) {
    console.log(': state:', storeState);
  }

  return storeState;
};

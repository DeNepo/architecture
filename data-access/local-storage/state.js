import { store } from './store.js';
import { getItem } from './get-item.js';

export const state = () => {
  const storeState = Object.keys(store)
    .map((key) => ({ [key]: getItem(key) }))
    .reduce((next, all) => ({ ...all, ...next }), {});

  return storeState;
};

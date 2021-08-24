import { store } from './local-storage/store.js';
import { getItem } from './local-storage/get-item.js';

import { state } from './state.js';

export const findAll = () => {
  const entries = Object.keys(store).map((key) => ({
    key,
    value: getItem(key),
  }));

  console.groupCollapsed(`: read all:`, entries);
  console.trace('state:', state());
  console.groupEnd();

  return entries;
};

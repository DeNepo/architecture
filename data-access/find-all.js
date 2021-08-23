import { store } from './local-storage/store.js';
import { state } from './local-storage/state.js';
import { getItem } from './local-storage/get-item.js';

import { isNode } from './utils/is-node.js';

export const findAll = () => {
  const entries = Object.keys(store).map((key) => ({
    key,
    value: getItem(key),
  }));

  console.groupCollapsed(`: read all:`, entries);
  if (!isNode) {
    console.trace('state:', state());
  }
  console.groupEnd();

  return entries;
};

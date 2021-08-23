import { store } from './local-storage/store.js';
import { state } from './local-storage/state.js';

import { isNode } from './utils/is-node.js';

export const allKeys = () => {
  const keys = Object.keys(store);

  console.groupCollapsed(`: keys:`, keys);
  if (!isNode) {
    console.trace('state:', state());
  }
  console.groupEnd();

  return keys;
};

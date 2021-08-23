import { store } from './local-storage/store.js';
import { state } from './local-storage/state.js';

import { isNode } from './utils/is-node.js';

export const hasKey = (key = '') => {
  const doesIncludeKey = key in store;

  console.groupCollapsed(`: includes "${key}:"`, doesIncludeKey);
  if (!isNode) {
    console.trace('state:', state());
  }
  console.groupEnd();

  return doesIncludeKey;
};

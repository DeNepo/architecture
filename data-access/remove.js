import { store } from './local-storage/store.js';
import { state } from './local-storage/state.js';
import { getItem } from './local-storage/get-item.js';
import { removeItem } from './local-storage/remove-item.js';

import { isNode } from './utils/is-node.js';

export const remove = (key = '') => {
  if (key in store) {
    const oldValue = getItem(key);
    removeItem(key);

    console.groupCollapsed(`: remove "${key}"`);
    if (isNode) {
      console.log('new state:', state());
    } else {
      console.trace('new state:', state());
    }
    console.groupEnd();

    return oldValue;
  } else {
    throw new ReferenceError(`cannot remove: key "${key}" does not exist`);
  }
};

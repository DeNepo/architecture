import { clear } from './local-storage/clear.js';
import { state } from './local-storage/state.js';

import { isNode } from './utils/is-node.js';

export const removeAll = () => {
  clear();

  console.groupCollapsed(`: remove all:`, state());
  if (isNode) {
    console.log('new state:', state());
  } else {
    console.trace('new state:', state());
  }
  console.groupEnd();
};

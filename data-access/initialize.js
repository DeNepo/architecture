import { store } from './local-storage/store.js';
import { state } from './local-storage/state.js';
import { getItem } from './local-storage/get-item.js';
import { setItem } from './local-storage/set-item.js';
import { removeItem } from './local-storage/remove-item.js';

import { isPlainObject } from './utils/is-plain-object.js';
import { isJsonData } from './utils/is-json-data.js';

import { isNode } from './utils/is-node.js';

export const initialize = (data = {}) => {
  if (!isPlainObject(data)) {
    throw new TypeError('data is not a plain object');
  }

  if (!isJsonData(data)) {
    throw new TypeError(`cannot initialize: data is not JSON data.

only these types are allowed:
- string
- number
- boolean
- null
- arrays
- objects`);
  }

  for (const key in store) {
    if (!(key in data)) {
      removeItem(key);
    }
  }

  for (const key in data) {
    if (getItem(key) === null) {
      setItem(key, data[key]);
    }
  }

  console.groupCollapsed(`: initialize:`, data);
  if (isNode) {
    console.log('new state:', state());
  } else {
    console.trace('new state:', state());
  }
  console.groupEnd();
};

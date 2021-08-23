import { store } from './local-storage/store.js';
import { state } from './local-storage/state.js';
import { setItem } from './local-storage/set-item.js';

import { isJsonData } from './utils/is-json-data.js';

import { isNode } from './utils/is-node.js';

export const save = (key = '', newValue) => {
  if (!isJsonData(newValue)) {
    throw new TypeError(`cannot update: new value is not JSON data.

only these types are allowed:
- string
- number
- boolean
- null
- arrays
- objects`);
  }

  if (key in store) {
    setItem(key, newValue);

    console.groupCollapsed(`: save "${key}":`, newValue);
    if (isNode) {
      console.log('new state:', state());
    } else {
      console.trace('new state:', state());
    }
    console.groupEnd();

    return newValue;
  } else {
    throw new ReferenceError(`cannot save: key "${key}" does not exist`);
  }
};

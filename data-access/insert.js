import { store } from './local-storage/store.js';
import { setItem } from './local-storage/set-item.js';
import { state } from './state.js';

import { isJsonData } from './utils/is-json-data.js';

export const insert = (key = '', value) => {
  if (!isJsonData(value)) {
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
    throw new ReferenceError(`cannot insert: key "${key}" already exists`);
  } else {
    setItem(key, value);

    console.groupCollapsed(`: insert "${key}:"`, value);
    console.trace('new state:', state());
    console.groupEnd();

    return value;
  }
};

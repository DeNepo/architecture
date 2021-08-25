import { store } from '../store.js';

import { deepClone } from '../1-utils/deep-clone.js';

export const findAll = () => {
  const allEntries = [];

  for (const key in store) {
    allEntries.push({
      key,
      value: deepClone(store[key]),
    });
  }

  return allEntries;
};

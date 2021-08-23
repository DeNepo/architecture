import { store } from './store.js';

export const getItem = (key = '') => {
  const item = store.getItem(key);
  try {
    return JSON.parse(item);
  } catch (_) {
    // in case an item was set manually without stringifying
    return item;
  }
};

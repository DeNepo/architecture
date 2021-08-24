import { store } from './local-storage/store.js';
import { state } from './state.js';

export const allKeys = () => {
  const keys = Object.keys(store);

  console.groupCollapsed(`: keys:`, keys);
  console.trace('state:', state());
  console.groupEnd();

  return keys;
};

import { store } from './local-storage/store.js';
import { state } from './state.js';

export const hasKey = (key = '') => {
  const doesIncludeKey = key in store;

  console.groupCollapsed(`: includes "${key}:"`, doesIncludeKey);
  console.trace('state:', state());
  console.groupEnd();

  return doesIncludeKey;
};

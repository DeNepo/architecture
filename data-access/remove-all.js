import { clear } from './local-storage/clear.js';
import { state } from './state.js';

export const removeAll = () => {
  clear();

  console.groupCollapsed(`: remove all:`, state());
  console.trace('new state:', state());
  console.groupEnd();
};

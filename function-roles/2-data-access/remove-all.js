import { store } from '../store.js';

export const removeAll = () => {
  console.log(`: remove all:`, store);

  for (const key in store) {
    delete store[key];
  }
};

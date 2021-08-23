import { searchHandler } from '../handlers/search.js';

export const searchListener = (id = '') => {
  document.getElementById(id).addEventListener('keyup', searchHandler);
};

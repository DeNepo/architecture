import { filterHandler } from '../handlers/filter.js';

export const filterListener = (id = '') => {
  document
    .getElementById('filter-root')
    .addEventListener('filter', filterHandler);
};

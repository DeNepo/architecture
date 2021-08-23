import { save } from '../../../data-access/save.js';
import { getActiveItems } from './get-active-items.js';

export const setQuery = (newQuery = '') => {
  if (typeof newQuery !== 'string') {
    throw new TypeError('new query is not a string');
  }

  save('query', newQuery);

  return getActiveItems();
};

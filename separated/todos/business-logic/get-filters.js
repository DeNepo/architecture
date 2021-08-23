import { find } from '../../../data-access/find.js';

export const getFilters = () => {
  return find('filters');
};

import { find } from '../../../data-access/find.js';

export const getQuery = () => {
  return find('query');
};

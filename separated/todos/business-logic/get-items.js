import { find } from '../../../data-access/find.js';

export const getItems = () => {
  return find('items');
};

import { find } from '../../../data-access/find.js';

export const getTitle = () => {
  return find('title');
};

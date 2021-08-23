import { find } from '../../../data-access/find.js';

export const readMessage = () => {
  return find('message');
};

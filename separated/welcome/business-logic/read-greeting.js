import { find } from '../../../data-access/find.js';

export const readGreeting = () => {
  return find('greeting');
};

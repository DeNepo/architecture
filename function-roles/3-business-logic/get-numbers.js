import { find } from '../2-data-access/find.js';

export const getNumbers = () => {
  // read values from state
  const numbers = find('numbers');

  // return the result
  return numbers;
};

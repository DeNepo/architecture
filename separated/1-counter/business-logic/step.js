import { find } from '../data-access/find.js';
import { save } from '../data-access/save.js';

export const step = (upOrDown = '') => {
  // read state
  const stepSize = find('increment');
  const value = find('value');

  // do the core logic
  const newValue = upOrDown === 'up' ? value + stepSize : value - stepSize;

  // update state
  save('value', newValue);

  // return for the presentation layer
  return newValue;
};

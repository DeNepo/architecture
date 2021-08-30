import { save } from '../data-access/save.js';

export const updateIncrement = (newIncrement = 0) => {
  // type-check the argument
  if (typeof newIncrement !== 'number') {
    throw new TypeError('new increment is not a number');
  }

  // save the new increment value to state
  save('increment', newIncrement);
};

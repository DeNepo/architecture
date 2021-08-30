import { find } from '../../../data-access/find.js';
import { save } from '../../../data-access/save.js';
import { getActiveItems } from './get-active-items.js';

/**
 *
 * @param {*} idToRemove
 */
export const removeItem = (idToRemove = 0) => {
  if (typeof idToRemove !== 'number' || Number.isNaN(idToRemove)) {
    throw new TypeError('first parameter is not a number');
  }
  if (idToRemove < 1) {
    throw new RangeError('IDs must be greater than 1');
  }
  if (!Number.isInteger(idToRemove)) {
    throw new Error('IDs must be an integer');
  }

  // read state
  const items = find('items');

  // do the stuff
  const newItems = items.filter((item) => item.id !== idToRemove);

  // update state
  save('items', newItems);

  // return the active items
  return getActiveItems();
};

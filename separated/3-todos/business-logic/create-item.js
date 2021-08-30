import { find } from '../../../data-access/find.js';
import { save } from '../../../data-access/save.js';
import { getActiveItems } from './get-active-items.js';

/**
 *
 * @param {*} task
 * @param {*} done
 * @returns
 */
export const createItem = (task = '', done = false) => {
  if (typeof task !== 'string') {
    throw new TypeError('the first parameter is not a string');
  }
  if (typeof done !== 'boolean') {
    throw new TypeError('the second parameter is not a boolean');
  }

  // read data from state
  const id = find('nextId');
  const list = find('items');

  // do the stuff
  const newEntry = { id, done, task };
  list.push(newEntry);

  // update state
  save('items', list);
  save('nextId', id + 1);

  // return active data
  return getActiveItems();
};

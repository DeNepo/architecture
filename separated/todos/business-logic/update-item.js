import { find } from '../../../data-access/find.js';
import { save } from '../../../data-access/save.js';

import { getActiveItems } from './get-active-items.js';

/**
 *
 * @param {*} newItem
 */
export const updateItem = (newItem = {}) => {
  // validate the new item
  if (!newItem || typeof newItem !== 'object') {
    throw new TypeError('new item must be an object');
  }
  if (!('id' in newItem) || typeof newItem.id !== 'number') {
    throw new TypeError('new item must have .id with type "number"');
  }
  if (!('task' in newItem) || typeof newItem.task !== 'string') {
    throw new TypeError('new item must have .task with type "string"');
  }
  if (!('done' in newItem) || typeof newItem.done !== 'boolean') {
    throw new TypeError('new item must have .done with type "boolean"');
  }

  // read state
  const items = find('items');

  // do the stuff
  //  does the entry exist?
  const foundItem = items.find((item) => item.id === newItem.id);
  if (!foundItem) {
    throw new ReferenceError(`there is no entry with id ${newItem.id}`);
  }
  //  replace it if it exists
  const itemIndex = items.indexOf(foundItem);
  items[itemIndex] = newItem;

  // update state
  save('items', items);

  // return the updated active items
  return getActiveItems();
};

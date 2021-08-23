import { find } from '../../../data-access/find.js';
import { save } from '../../../data-access/save.js';

import { itemSchema } from '../data/item.schema.js';
import { validate } from '../../../lib/validate.js';
import { getActiveItems } from './get-active-items.js';

/**
 *
 * @param {*} newItem
 */
export const updateItem = (newItem = {}) => {
  // validate the new item
  const { isValid, validationErrors } = validate(itemSchema, newItem);

  if (!isValid) {
    throw new Error(
      `new item is not valid: \n- ${validationErrors.join('\n- ')}`,
    );
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

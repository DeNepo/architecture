import { updateItem } from '../../../../business-logic/update-item.js';
import { get } from '../../../../business-logic/get.js';

import { logList } from '../views/log-list.js';
import { warning } from '../views/warning.js';

export const toggle = (id = 0) => {
  if (typeof id !== 'number') {
    warning(`id must be a number`);
    return;
  }

  const items = get('items');

  const item = items.find((item) => item.id === id);
  if (!item) {
    warning(`there is no todo with id ${id}`);
    return;
  }

  item.done = !item.done;

  updateItem(item);

  const newItems = get('items');

  logList(get('title'), newItems);
};

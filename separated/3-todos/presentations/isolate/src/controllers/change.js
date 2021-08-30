import { updateItem } from '../../../../business-logic/update-item.js';
import { get } from '../../../../business-logic/get.js';

import { logList } from '../views/log-list.js';
import { warning } from '../views/warning.js';

export const change = (id = 0, newTask = '') => {
  if (typeof id !== 'number') {
    warning('id is not a number');
    return;
  }

  if (typeof newTask !== 'string') {
    warning('new task is not a string');
    return;
  }

  const items = get('items');

  const item = items.find((item) => item.id === id);
  if (!item) {
    warning(`there is no todo with id ${id}`);
    return;
  }

  item.task = newTask;
  updateItem(item);

  const newList = get('items');
  logList(get('title'), newList);
};

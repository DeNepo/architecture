import { updateItem } from '../../../../business-logic/update-item.js';
import { getTitle } from '../../../../business-logic/get-title.js';
import { getItems } from '../../../../business-logic/get-items.js';

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

  const items = getItems();

  const item = items.find((item) => item.id === id);
  if (!item) {
    warning(`there is no todo with id ${id}`);
    return;
  }

  item.task = newTask;
  updateItem(item);

  const newList = getItems();
  logList(getTitle(), newList);
};

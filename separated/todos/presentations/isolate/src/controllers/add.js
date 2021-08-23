import { createItem } from '../../../../business-logic/create-item.js';
import { getTitle } from '../../../../business-logic/get-title.js';
import { getItems } from '../../../../business-logic/get-items.js';

import { warning } from '../views/warning.js';
import { logList } from '../views/log-list.js';

export const add = (newTask = '') => {
  if (typeof newTask === 'string') {
    createItem(newTask, false);

    const newList = getItems();
    logList(getTitle(), newList);
  } else {
    warning('new task is not a string');
  }
};

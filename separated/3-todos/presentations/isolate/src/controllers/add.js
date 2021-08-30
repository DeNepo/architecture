import { createItem } from '../../../../business-logic/create-item.js';
import { get } from '../../../../business-logic/get.js';

import { warning } from '../views/warning.js';
import { logList } from '../views/log-list.js';

export const add = (newTask = '') => {
  if (typeof newTask === 'string') {
    createItem(newTask, false);

    const newList = get('items');
    logList(get('title'), newList);
  } else {
    warning('new task is not a string');
  }
};

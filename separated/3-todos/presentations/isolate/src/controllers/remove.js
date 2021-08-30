import { removeItem } from '../../../../business-logic/remove-item.js';
import { get } from '../../../../business-logic/get.js';

import { logList } from '../views/log-list.js';
import { warning } from '../views/warning.js';

export const remove = (id = 0) => {
  if (typeof id !== 'number') {
    warning('id is not a number');
    return;
  }

  const items = get('items');

  const item = items.find((item) => item.id === id);
  if (!item) {
    warning(`there is no todo with id ${id}`);
    return;
  }

  removeItem(id);

  const newList = get('items');

  logList(get('title'), newList);
};

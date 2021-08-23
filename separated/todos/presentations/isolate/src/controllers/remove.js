import { removeItem } from '../../../../business-logic/remove-item.js';
import { getTitle } from '../../../../business-logic/get-title.js';
import { getItems } from '../../../../business-logic/get-items.js';

import { logList } from '../views/log-list.js';
import { warning } from '../views/warning.js';

export const remove = (id = 0) => {
  if (typeof id !== 'number') {
    warning('id is not a number');
    return;
  }

  const items = getItems();

  const item = items.find((item) => item.id === id);
  if (!item) {
    warning(`there is no todo with id ${id}`);
    return;
  }

  removeItem(id);

  const newList = getItems();

  logList(getTitle(), newList);
};

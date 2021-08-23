import { getTitle } from '../../../../business-logic/get-title.js';
import { getItems } from '../../../../business-logic/get-items.js';

import { logList } from '../views/log-list.js';

export const showList = () => {
  logList(getTitle(), getItems());
};

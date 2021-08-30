import { get } from '../../../../business-logic/get.js';

import { logList } from '../views/log-list.js';

export const showList = () => {
  logList(get('title'), get('items'));
};

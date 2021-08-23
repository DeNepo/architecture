import { save } from '../../../data-access/save.js';
import { getActiveItems } from './get-active-items.js';

export const setFilters = (done = true, notDone = true) => {
  save('filters', { done, notDone });

  return getActiveItems();
};

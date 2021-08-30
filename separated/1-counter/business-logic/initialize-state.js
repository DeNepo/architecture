import { count } from '../data/count.js';

import { load } from '../data-access/load.js';

export const initializeState = () => {
  // initialize state with data
  load(count);
};

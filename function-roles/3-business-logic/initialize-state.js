import { load } from '../2-data-access/load.js';

export const initializeState = (data = {}) => {
  load(data);
};

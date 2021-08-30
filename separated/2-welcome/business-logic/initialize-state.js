import { load } from '../../../data-access/load.js';

export const initializeState = async () => {
  await load('../data/friendly.json', import.meta);
};

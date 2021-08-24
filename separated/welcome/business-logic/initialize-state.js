import { load } from '../../../data-access/load.js';

export const initializeState = async () => {
  await load('./separated/welcome/data/friendly.json');
};

import { load } from '../../../data-access/load.js';

export const initializeState = async () => {
  await load('../data/todos.json', import.meta);
};

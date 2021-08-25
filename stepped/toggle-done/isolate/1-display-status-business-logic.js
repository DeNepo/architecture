// --- business logic ---

import { load } from '../../../data-access/load.js';
import { find } from '../../../data-access/find.js';

// 0. initialize state
const initializeState = async () => {
  await load('./stepped/toggle-done/data/done.json');
};
// 1. display status
const getDone = () => {
  return find('done');
};

// --- controllers ---

// 0. initialize state
const init = async () => {
  await initializeState();
};

// --- build the app ---

const app = {
  init,
};

// --- use the app ---

await app.init();

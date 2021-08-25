// --- business logic ---

import { load } from '../../../data-access/load.js';

// 0. initialize state
const initializeState = async () => {
  await load('./stepped/list/data/list.json');
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

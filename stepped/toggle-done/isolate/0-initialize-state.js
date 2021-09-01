// --- business logic ---

import { load } from '../../../data-access/load.js';

// 0. initialize state
const initializeState = async () => {
  await load('../data/done.json', import.meta);
};

// --- controllers ---

// 0. initialize state
const init = async () => {
  debugger; // entry point
  await initializeState();
};

// --- build the app ---

const app = {
  init,
};

// --- use the app ---

await app.init();

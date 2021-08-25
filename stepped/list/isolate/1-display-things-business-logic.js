// --- business logics ---

import { find } from '../../../data-access/find.js';
import { load } from '../../../data-access/load.js';

// 0. initialize state
const initializeState = async () => {
  await load('./stepped/list/data/list.json');
};
// 1. display things
const getThings = () => {
  return find('things');
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

import { removeAll } from '../../../data-access/remove-all.js';
removeAll();

await app.init();

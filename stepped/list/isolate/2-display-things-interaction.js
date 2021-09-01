// --- business logic ---

import { find } from '../../../data-access/find.js';
import { load } from '../../../data-access/load.js';

// 0. initialize state
const initializeState = async () => {
  await load('../data/list.json', import.meta);
};
// 1. display things
const getThings = () => {
  return find('things');
};

// --- views ---

// 2. display things
const logList = (entries) => {
  console.log('\na list of things:');
  console.log('- - - - - - - - - - - -');
  for (const entry of entries) {
    console.log(`${entry.id}. ${entry.text}`);
  }
  console.log('\n');
};

// --- controllers ---

// 0. initialize state
const init = async () => {
  debugger; // entry point
  await initializeState();
};
// 2. display things
const displayThings = () => {
  debugger; // entry point
  const things = getThings();
  logList(things);
};

// --- build the app ---

const app = {
  init,
  displayThings,
};

// --- use the app ---

import { removeAll } from '../../../data-access/remove-all.js';
removeAll();

await app.init();

app.displayThings();

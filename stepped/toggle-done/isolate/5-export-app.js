// --- business logic ---

import { load } from '../../../data-access/load.js';
import { find } from '../../../data-access/find.js';
import { save } from '../../../data-access/save.js';

// 0. initialize state
const initializeState = async () => {
  await load('../data/done.json', import.meta);
};
// 1. display status
const getDone = () => {
  return find('done');
};
// 3. toggle status
const toggle = () => {
  const done = getDone();
  const flipped = !done;
  save('done', flipped);
  return flipped;
};

// --- views ---

// 2. display status
const logStatus = (status) => {
  if (status === true) {
    console.log('\nall done!\n\n');
  } else {
    console.log('\nnot done :(\n\n');
  }
};

// --- controllers ---

// 0. initialize state
const init = async () => {
  await initializeState();
};
// 2. display status
const status = () => {
  const currentStatus = getDone();
  logStatus(currentStatus);
};
// 4. toggle status
const toggleStatus = () => {
  const newStatus = toggle();
  logStatus(newStatus);
};

// --- build and export the app ---

export const app = {
  init,
  status,
  toggleStatus,
};

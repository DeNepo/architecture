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
  debugger; // entry point
  await initializeState();
};
// 2. display status
const status = () => {
  debugger; // entry point
  const currentStatus = getDone();
  logStatus(currentStatus);
};

// --- build the app ---

const app = {
  init,
  status,
};

// --- use the app ---

await app.init();

app.status();
app.status();

// --- business logic ---

import { save } from '../../../data-access/save.js';
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
// 3. add thing
const addThing = (text = '') => {
  const list = find('things');
  const nextId = find('nextId');
  list.push({ id: nextId, text });
  save('things', list);
  save('nextId', nextId + 1);
  return list;
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
// 4. add thing
const warn = (warning = '') => {
  console.log(`%c\n${warning}\n`, 'color: grey;');
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
// 4. add thing
const newThing = (text = '') => {
  debugger; // entry point
  if (typeof text !== 'string') {
    warn('new thing must be a string');
    return;
  }
  addThing(text);
};

// --- build the app ---

const app = {
  init,
  displayThings,
  newThing,
};

// --- use the app ---

import { removeAll } from '../../../data-access/remove-all.js';
removeAll();

await app.init();

app.displayThings();
app.newThing('good bye');
app.newThing('potato');
app.newThing(12);
app.displayThings();

// --- initialize state ---

import { initialize } from '../../../data-access/initialize.js';
import { removeAll } from '../../../data-access/remove-all.js';

const data = {
  nextId: 2,
  items: [{ id: 1, text: 'hello' }],
};
removeAll();
initialize(data);

// --- business logic ---

import { find } from '../../../data-access/find.js';

const getItems = () => {
  return find('items');
};

// --- views ---

const logList = (entries) => {
  console.log('\na list of things:');
  console.log('- - - - - - - - - - - -');
  for (const entry of entries) {
    console.log(`${entry.id}. ${entry.text}`);
  }
  console.log();
};

// --- controllers ---

const displayItems = () => {
  const items = getItems();
  logList(items);
};

// --- build the app ---

const app = {
  displayItems,
};

// --- use the app ---

app.displayItems();

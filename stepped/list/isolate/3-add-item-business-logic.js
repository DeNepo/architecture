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

import { save } from '../../../data-access/save.js';
import { find } from '../../../data-access/find.js';

const getItems = () => {
  return find('items');
};
const addItem = (text = '') => {
  const list = find('items');
  const nextId = find('nextId');
  list.push({ id: nextId, text });
  save('items', list);
  save('nextId', nextId + 1);
  return list;
};

// tests for business logic
//   these will be gone in later steps for a smaller HTML file

save('items', []);
save('nextId', 1);
addItem('hello');
const theList = addItem('good bye');

console.log('test 1, expect ["hello", "good bye"]:', theList);

console.log('test 2, expect 3:', find('nextId'));

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

// app.displayItems()

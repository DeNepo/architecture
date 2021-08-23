// --- initialize state ---

import { initialize } from '../../../data-access/initialize.js';
import { removeAll } from '../../../data-access/remove-all.js';

const data = {
  nextId: 2,
  items: [{ id: 1, text: 'hello' }],
};
removeAll();
initialize(data);

// --- --- --- ---

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
const removeItem = (id = 1) => {
  const list = find('items');
  const newList = list.filter((item) => item.id !== id);
  save('items', newList);
  return newList;
};

// tests for business logic
//   these will be gone in later steps for a smaller HTML file

save('items', []);
save('nextId', 1);
addItem('hello');
const theList = addItem('good bye');

console.log('test 1, expect ["hello", "good bye"]:', theList);

console.log('test 2, expect 3:', find('nextId'));

const newerList = removeItem(2);
console.log('test 3, expect ["hello"]:', newerList);

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
const newItem = (text = '') => {
  if (typeof text !== 'string') {
    console.log('new item must be a string');
    return;
  }
  addItem(text);
};

// --- build the app ---

const app = {
  displayItems,
  newItem,
};

// --- use the app ---

// app.displayItems();
// app.newItem('good bye');
// app.newItem('potato');
// app.newItem(12);
// app.displayItems();

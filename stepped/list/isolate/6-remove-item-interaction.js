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
const remove = (id = 0) => {
  if (!Number.isInteger(id) || id < 1) {
    console.log('id must be an integer greater than 0');
    return;
  }
  removeItem(id);
};

// --- build the app ---

const app = {
  displayItems,
  newItem,
  remove,
};

// --- use the app ---

app.displayItems();
app.newItem('good bye');
app.newItem('potato');
app.displayItems();
app.remove(1);
app.displayItems();
app.remove(2);
app.displayItems();

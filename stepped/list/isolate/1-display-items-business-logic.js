// --- initialize state ---

import { initialize } from '../../../data-access/initialize.js';
import { removeAll } from '../../../data-access/remove-all.js';

const data = {
  nextId: 2,
  items: [{ id: 1, text: 'hello' }],
};
removeAll();
initialize(data);

// --- business logics ---

import { find } from '../../../data-access/find.js';

const getItems = () => {
  return find('items');
};

// test getItems
import { save } from '../../../data-access/save.js';

save('items', [{ id: 2, text: 'potato' }]);
const list = getItems();
console.log('test 1, expect [{ id: 2, text: "potato" }]', list);

// --- views ---

// --- controllers ---

// --- build the app ---

const app = {};

// --- use the app ---

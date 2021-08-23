import { showList } from './controllers/show-list.js';
import { add } from './controllers/add.js';
import { toggle } from './controllers/toggle.js';
import { change } from './controllers/change.js';
import { remove } from './controllers/remove.js';

// initialize state
import { initialize } from '../../../../../data-access/initialize.js';
import { todos } from '../../../data/todos.js';

initialize(todos);

export const app = {
  toggle,
  add,
  showList,
  change,
  remove,
};

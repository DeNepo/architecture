// --- initialize state ---

import { initialize } from '../../../data-access/initialize.js';
import { removeAll } from '../../../data-access/remove-all.js';

const data = {
  done: true,
};
removeAll();
initialize(data);

// --- business logic ---
import { find } from '../../../data-access/find.js';

const getDone = () => {
  return find('done');
};

// some tests!
import { save } from '../../../data-access/save.js';

console.log('testing getDone:');

const status1 = getDone();
console.log('test 1:', status1 === true ? 'PASS' : 'FAIL');

save('done', false);

const status2 = getDone();
console.log('test 2:', status2 === false ? 'PASS' : 'FAIL');

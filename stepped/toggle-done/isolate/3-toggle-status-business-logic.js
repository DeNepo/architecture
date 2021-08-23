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
import { save } from '../../../data-access/save.js';

const getDone = () => {
  return find('done');
};
const toggle = () => {
  const done = businessLogic.getDone();
  const flipped = !done;
  save('done', flipped);
};

// tests!
console.log('testing toggle:');

toggle();
const status1 = getDone();
console.log('test 1:', status1 === false ? 'PASS' : 'FAIL');

toggle();
const status2 = getDone();
console.log('test 2:', status2 === true ? 'PASS' : 'FAIL');

// --- views ---

const logStatus = (status) => {
  if (status === true) {
    console.log('all done!');
  } else {
    console.log('not done :(');
  }
};

// --- controllers ---

const status = () => {
  const currentStatus = getDone();
  logStatus(currentStatus);
};

// --- build the app ---

const app = {
  status,
};

// --- use the app ---

// controllers.status();

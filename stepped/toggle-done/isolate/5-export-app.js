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
  const done = getDone();
  const flipped = !done;
  save('done', flipped);
};

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
const toggleStatus = () => {
  toggle();
  status();
};

// --- build and export the app ---

export const app = {
  status,
  toggleStatus,
};

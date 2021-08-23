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

// --- create the app ---

const app = {
  status,
};

// --- use the app ---

app.status();
app.status();

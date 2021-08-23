import { setFilters } from '../../../../business-logic/set-filters.js';

import { listComponent } from '../components/list.js';

export const filterHandler = (event) => {
  // read user input from custom event
  const done = event.detail.done;
  const notDone = event.detail.notDone;

  // use business logic
  const newList = setFilters(done, notDone);

  // update user interface
  const listContainerEl = document.getElementById('list-root');
  listContainerEl.innerHTML = '';
  listContainerEl.appendChild(listComponent(newList));
};

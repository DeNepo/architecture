import { set } from '../../../../business-logic/set.js';
import { getActiveItems } from '../../../../business-logic/get-active-items.js';

import { listComponent } from '../components/list.js';

export const filterHandler = (event) => {
  // read user input from custom event
  const done = event.detail.done;
  const notDone = event.detail.notDone;

  // use business logic
  set('filters', { done, notDone });
  const newList = getActiveItems();

  // update user interface
  const listContainerEl = document.getElementById('list-root');
  listContainerEl.innerHTML = '';
  listContainerEl.appendChild(listComponent(newList));
};

import { getActiveItems } from '../../../../business-logic/get-active-items.js';
import { set } from '../../../../business-logic/set.js';

import { listComponent } from '../components/list.js';

export const viewChangesHandler = (event) => {
  debugger; // entry point: user interaction

  if (event.type === 'filter') {
    // read user input from custom event
    const done = event.detail.done;
    const notDone = event.detail.notDone;

    // use business logic
    set('filters', { done, notDone });
  } else if (event.type === 'search') {
    // read user input from custom event
    const query = event.detail.query;

    // use the business logic
    set('query', query);
  } else {
    return;
  }

  const listToRender = getActiveItems();

  // update user interface
  const listContainerEl = document.getElementById('list-root');
  listContainerEl.innerHTML = '';
  const listEl = listComponent(listToRender);
  listContainerEl.appendChild(listEl);
};

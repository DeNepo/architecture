import { setFilters } from '../../../../business-logic/set-filters.js';
import { setQuery } from '../../../../business-logic/set-query.js';

import { listComponent } from '../components/list.js';

export const viewChangesHandler = (event) => {
  let listToRender;

  if (event.type === 'filter') {
    // read user input from custom event
    const done = event.detail.done;
    const notDone = event.detail.notDone;

    // use business logic
    listToRender = setFilters(done, notDone);
  } else if (event.type === 'search') {
    // read user input from custom event
    const query = event.detail.query;

    // use the business logic
    listToRender = setQuery(query);
  } else {
    return;
  }

  // update user interface
  const listContainerEl = document.getElementById('list-root');
  listContainerEl.innerHTML = '';
  const listEl = listComponent(listToRender);
  listContainerEl.appendChild(listEl);
};

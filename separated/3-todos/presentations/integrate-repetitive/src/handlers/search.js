import { getActiveItems } from '../../../../business-logic/get-active-items.js';
import { set } from '../../../../business-logic/set.js';

import { listComponent } from '../components/list.js';

export const searchHandler = (event) => {
  // read user input
  const query = event.target.value;

  // use the business logic
  set('query', query);
  const searchResults = getActiveItems();

  // update user interface
  const listContainerEl = document.getElementById('list-root');
  listContainerEl.innerHTML = '';
  const listEl = listComponent(searchResults);
  listContainerEl.appendChild(listEl);
};

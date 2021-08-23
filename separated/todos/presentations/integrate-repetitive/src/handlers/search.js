import { setQuery } from '../../../../business-logic/set-query.js';

import { listComponent } from '../components/list.js';

export const searchHandler = (event) => {
  // read user input
  const query = event.target.value;

  // use the business logic
  const searchResults = setQuery(query);

  // update user interface
  const listContainerEl = document.getElementById('list-root');
  listContainerEl.innerHTML = '';
  const listEl = listComponent(searchResults);
  listContainerEl.appendChild(listEl);
};

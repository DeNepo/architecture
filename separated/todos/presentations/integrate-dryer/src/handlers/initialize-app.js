import { initializeState } from '../../../../business-logic/initialize-state.js';
import { getTitle } from '../../../../business-logic/get-title.js';
import { getQuery } from '../../../../business-logic/get-query.js';
import { getFilters } from '../../../../business-logic/get-filters.js';
import { getActiveItems } from '../../../../business-logic/get-active-items.js';

import { searchFieldComponent } from '../components/search-field.js';
import { filtersComponent } from '../components/filters.js';
import { listComponent } from '../components/list.js';

export const initializeApp = async () => {
  await initializeState('../../../../data/todos.json', import.meta);

  document.getElementById('title').innerText = getTitle();

  const query = getQuery();
  const searchEl = searchFieldComponent(query);
  document.getElementById('search-root').appendChild(searchEl);

  const { done, notDone } = getFilters();
  const filtersForm = filtersComponent(done, notDone);
  document.getElementById('filter-root').appendChild(filtersForm);

  const list = getActiveItems();
  const listEl = listComponent(list);
  document.getElementById('list-root').appendChild(listEl);
};

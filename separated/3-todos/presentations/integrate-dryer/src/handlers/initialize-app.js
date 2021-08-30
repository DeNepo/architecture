import { initializeState } from '../../../../business-logic/initialize-state.js';
import { get } from '../../../../business-logic/get.js';
import { getActiveItems } from '../../../../business-logic/get-active-items.js';

import { searchFieldComponent } from '../components/search-field.js';
import { filtersComponent } from '../components/filters.js';
import { listComponent } from '../components/list.js';

export const initializeApp = async () => {
  await initializeState();

  document.getElementById('title').innerText = get('title');

  const query = get('query');
  const searchEl = searchFieldComponent(query);
  document.getElementById('search-root').appendChild(searchEl);

  const { done, notDone } = get('filters');
  const filtersForm = filtersComponent(done, notDone);
  document.getElementById('filter-root').appendChild(filtersForm);

  const list = getActiveItems();
  const listEl = listComponent(list);
  document.getElementById('list-root').appendChild(listEl);
};

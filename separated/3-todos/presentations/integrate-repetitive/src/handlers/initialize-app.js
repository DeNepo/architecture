import { initializeState } from '../../../../business-logic/initialize-state.js';
import { getActiveItems } from '../../../../business-logic/get-active-items.js';
import { get } from '../../../../business-logic/get.js';

import { listComponent } from '../components/list.js';
import { filtersComponent } from '../components/filters.js';

export const initializeApp = async () => {
  debugger; // entry point: initialize state & UI

  await initializeState();

  document.getElementById('title').innerText = get('title');

  document.getElementById('search-query').value = get('query');

  const { done, notDone } = get('filters');
  const filtersForm = filtersComponent(done, notDone);
  document.getElementById('filter-root').appendChild(filtersForm);

  const list = getActiveItems();
  const listEl = listComponent(list);
  document.getElementById('list-root').appendChild(listEl);
};

import { setFilters } from './set-filters.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { initialize } from '../../../data-access/initialize.js';
import { find } from '../../../data-access/find.js';

describe('setFilters: updates the title in state', () => {
  beforeEach(() => {
    removeAll();
    initialize({
      filters: {},
      items: [],
      query: '',
    });
  });

  it('side-effect in state: changes "filters"', () => {
    setFilters(false, false);
    expect(find('filters')).toEqual({ done: false, notDone: false });
  });

  it('returns the active items', () => {
    const activeItems = setFilters(true, true);
    expect(activeItems).toEqual([]);
  });
});

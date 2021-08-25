import { setFilters } from './set-filters.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { insert } from '../../../data-access/insert.js';
import { find } from '../../../data-access/find.js';

describe('setFilters: updates the title in state', () => {
  beforeEach(() => {
    removeAll();

    insert('query', '');
    insert('filters', {});
    insert('items', []);
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

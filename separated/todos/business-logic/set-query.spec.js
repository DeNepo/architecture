import { setQuery } from './set-query.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { insert } from '../../../data-access/insert.js';
import { find } from '../../../data-access/find.js';

describe('setQuery: updates the query in state', () => {
  beforeEach(() => {
    removeAll();

    insert('query', '');
    insert('filters', {
      done: true,
      notDone: true,
    });
    insert('items', []);
  });

  it('side-effect in state: changes "query"', () => {
    setQuery('hello');
    expect(find('query')).toEqual('hello');
  });

  it('returns the active items', () => {
    const activeItems = setQuery('good bye');
    expect(activeItems).toEqual([]);
  });
});

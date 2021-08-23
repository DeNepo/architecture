import { setQuery } from './set-query.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { initialize } from '../../../data-access/initialize.js';
import { find } from '../../../data-access/find.js';

describe('setQuery: updates the query in state', () => {
  beforeEach(() => {
    removeAll();
    initialize({
      query: '',
      filters: {
        done: true,
        notDone: true,
      },
      items: [],
    });
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

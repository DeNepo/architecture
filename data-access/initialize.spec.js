import { initialize } from './initialize.js';

import { clear } from './local-storage/clear.js';
import { getItem } from './local-storage/get-item.js';
import { setItem } from './local-storage/set-item.js';

describe('initialize: initializes localStorage with new data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('removes all keys that are not in the new data', () => {
    setItem('a', 1);
    initialize({});
    expect(getItem('a')).toEqual(null);
  });

  it('adds keys that were in the data, but not in local storage', () => {
    initialize({ a: 1 });
    expect(getItem('a')).toEqual(1);
  });

  it('does not modify keys that were already saved in local storage', () => {
    setItem('a', 1);
    initialize({ a: 2 });
    expect(getItem('a')).toEqual(1);
  });
});

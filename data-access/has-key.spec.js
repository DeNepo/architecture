import { hasKey } from './has-key.js';

import { clear } from './local-storage/clear.js';
import { setItem } from './local-storage/set-item.js';

describe('hasKey: checks if a key exists in localStorage', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('returns true if the key exists', () => {
    setItem('a', 1);
    expect(hasKey('a')).toEqual(true);
  });

  it('returns false if the key does not exist', () => {
    expect(hasKey('b')).toEqual(false);
  });
});

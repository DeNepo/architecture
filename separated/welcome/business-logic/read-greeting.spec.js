import { readGreeting } from './read-greeting.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { insert } from '../../../data-access/insert.js';

describe('readGreeting: reads the greeting value from state', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    removeAll();
  });

  it('returns an empty string if the greeting is empty', () => {
    insert('greeting', '');
    const greeting = readGreeting();
    expect(greeting).toEqual('');
  });

  it('returns the value if it is not empty', () => {
    insert('greeting', 'hello');
    const greeting = readGreeting();
    expect(greeting).toEqual('hello');
  });
});

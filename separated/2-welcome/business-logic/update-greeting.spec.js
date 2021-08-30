import { updateGreeting } from './update-greeting.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { insert } from '../../../data-access/insert.js';
import { find } from '../../../data-access/find.js';

describe('updateGreeting: updates the greeting value from state', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    removeAll();
  });

  it('updates the greeting', () => {
    insert('greeting', 'hello');
    updateGreeting('good bye');
    expect(find('greeting')).toEqual('good bye');
  });

  it('returns the new greeting', () => {
    insert('greeting', '');
    const greeting = updateGreeting('hi');
    expect(greeting).toEqual('hi');
  });
});

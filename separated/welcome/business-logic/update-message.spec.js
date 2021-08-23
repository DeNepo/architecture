import { updateMessage } from './update-message.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { insert } from '../../../data-access/insert.js';
import { find } from '../../../data-access/find.js';

describe('updateMessage: updates the message value from state', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    removeAll();
  });

  it('updates the message', () => {
    insert('message', 'hello');
    updateMessage('good bye');
    expect(find('message')).toEqual('good bye');
  });

  it('returns the new message', () => {
    insert('message', '');
    const message = updateMessage('hi');
    expect(message).toEqual('hi');
  });
});

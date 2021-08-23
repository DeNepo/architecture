import { beWelcoming } from './be-welcoming.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { insert } from '../../../data-access/insert.js';

describe("beWelcoming: wraps the state's greeting in a friendly message", () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    removeAll();
  });

  it('returns an empty string if the greeting and message are empty', () => {
    insert('greeting', '');
    insert('message', '');
    const welcomingMessage = beWelcoming();
    expect(welcomingMessage).toEqual('');
  });

  it('returns only a greeting if the message is empty', () => {
    insert('greeting', 'hello');
    insert('message', '');
    const welcomingMessage = beWelcoming();
    expect(welcomingMessage).toEqual('hello!');
  });

  it('returns only a message if the greeting is empty', () => {
    insert('greeting', '');
    insert('message', 'welcome to this app');
    const welcomingMessage = beWelcoming();
    expect(welcomingMessage).toEqual('welcome to this app.');
  });

  it('returns a message and greeting if they are not empty', () => {
    insert('greeting', 'hello');
    insert('message', 'welcome to this app');
    const welcomingMessage = beWelcoming();
    expect(welcomingMessage).toEqual('hello! welcome to this app.');
  });
});

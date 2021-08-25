import { store } from '../store.js';

import { removeAll } from './remove-all.js';

describe('removeAll: removes all key/values in the store', () => {
  beforeEach(() => {
    // this logic runs before each `it` so that they start with an empty store
    //  remember side-effects!

    // remove all key/value pairs from the store
    for (const key in store) {
      delete store[key];
    }
  });

  it('removes everything!', () => {
    store.fruit = 'guava';
    store.colors = ['red', 'orange', 'blue'];
    store.user = {
      name: 'houla',
      age: 58,
    };
    store.tall = false;
    removeAll();
    expect(store).toEqual({});
  });
});

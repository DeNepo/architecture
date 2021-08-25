import { store } from '../store.js';

import { findAll } from './find-all.js';

describe('findAll: returns all the key/value pairs in your store', () => {
  beforeEach(() => {
    // this logic runs before each `it` so that they start with an empty store
    //  remember side-effects!

    // findAll all key/value pairs from the store
    for (const key in store) {
      delete store[key];
    }
  });

  describe('returns an array of key/value objects', () => {
    it('returns an empty array if the store is empty', () => {
      const emptyArray = findAll();
      expect(emptyArray).toEqual([]);
    });
    it('findAlls primitive types', () => {
      store.fruit = 'guava';
      store.smiles = 1001;
      store.colors = ['red', 'yellow', 'blue'];

      const entries = findAll();

      expect(entries).toEqual([
        { key: 'fruit', value: 'guava' },
        { key: 'smiles', value: 1001 },
        { key: 'colors', value: ['red', 'yellow', 'blue'] },
      ]);
    });
  });

  describe('deep-clones all values in the store', () => {
    it('the returned value is deeply equal to the stored value', () => {
      store.colors = ['red', 'yellow', 'blue'];
      const entries = findAll();
      const returnedColors = entries[0].value;
      expect(returnedColors).toEqual(store.colors);
    });
    it('the returned value is not the same array in memory', () => {
      store.colors = ['red', 'yellow', 'blue'];
      const entries = findAll();
      const returnedColors = entries[0].value;
      const areSameArray = returnedColors === store.colors;
      expect(areSameArray).toEqual(false);
    });
  });
});

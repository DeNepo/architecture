import { store } from '../store.js';

import { find } from './find.js';

describe('find: finds the value stored behind a specific key', () => {
  beforeEach(() => {
    // this logic runs before each `it` so that they start with an empty store
    //  remember side-effects!

    // remove all key/value pairs from the store
    for (const key in store) {
      delete store[key];
    }
  });

  describe('returns the value associated with a key, if that key exists', () => {
    it('finds strings', () => {
      store.fruit = 'guava';
      const foundFruit = find('fruit');
      expect(foundFruit).toEqual('guava');
    });
    it('finds numbers', () => {
      store.smiles = 1001;
      const foundSmiles = find('smiles');
      expect(foundSmiles).toEqual(1001);
    });
    it('finds arrays', () => {
      store.colors = ['red', 'yellow', 'blue'];
      const foundColors = find('colors');
      expect(foundColors).toEqual(['red', 'yellow', 'blue']);
    });
  });

  describe('throws an error if the key does not exist', () => {
    it('cannot find non-existent keys', () => {
      const shouldThrow = () => find('nope');
      expect(shouldThrow).toThrow(ReferenceError);
    });
  });

  describe('checks the type of its parameter', () => {
    it('key must be a string', () => {
      const shouldThrow = () => find(1);
      expect(shouldThrow).toThrow(TypeError);
    });
  });

  describe('deep-clones all values in the store', () => {
    it('the returned value is deeply equal to the stored value', () => {
      store.colors = ['red', 'yellow', 'blue'];
      const storedColors = find('colors');
      expect(storedColors).toEqual(store.colors);
    });
    it('the returned value is not the same array in memory', () => {
      store.colors = ['red', 'yellow', 'blue'];
      const storedColors = find('colors');
      const areSameArray = storedColors === store.colors;
      expect(areSameArray).toEqual(false);
    });
  });
});

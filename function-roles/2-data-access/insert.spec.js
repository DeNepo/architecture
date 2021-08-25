import { store } from '../store.js';

import { insert } from './insert.js';

describe('insert: inserts a new key/value pair into the store', () => {
  beforeEach(() => {
    // this logic runs before each `it` so that they start with an empty store
    //  remember side-effects!

    // remove all key/value pairs from the store
    for (const key in store) {
      delete store[key];
    }
  });

  describe('adds a key/value pair if the key does not exist already', () => {
    it('inserts strings', () => {
      insert('fruit', 'guava');
      expect(store.fruit).toEqual('guava');
    });
    it('inserts numbers', () => {
      insert('smiles', 1001);
      expect(store.smiles).toEqual(1001);
    });
    it('inserts arrays', () => {
      insert('colors', ['red', 'yellow', 'blue']);
      expect(store.colors).toEqual(['red', 'yellow', 'blue']);
    });
  });

  describe('throws an error if the key already exists', () => {
    it('cannot insert keys that already exist', () => {
      store.stop = 'and shop';
      const shouldThrow = () => insert('stop', 'error time!');
      expect(shouldThrow).toThrow(ReferenceError);
    });
  });

  describe('checks the type of its parameter', () => {
    it('key must be a string', () => {
      const shouldThrow = () => insert(1, 'error time!');
      expect(shouldThrow).toThrow(TypeError);
    });
  });

  describe('deep-clones all values in the store', () => {
    it('the returned value is deeply equal to the stored value', () => {
      const colorsArray = ['red', 'yellow', 'blue'];
      insert('colors', colorsArray);
      expect(store.colors).toEqual(colorsArray);
    });
    it('the returned value is not the same array in memory', () => {
      const colorsArray = ['red', 'yellow', 'blue'];
      insert('colors', colorsArray);
      const areSameArray = colorsArray === store.colors;
      expect(areSameArray).toEqual(false);
    });
  });
});

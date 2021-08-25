import { store } from '../store.js';

import { save } from './save.js';

describe('save: saves changes to a key/value pair, if the key exists', () => {
  beforeEach(() => {
    // this logic runs before each `it` so that they start with an empty store
    //  remember side-effects!

    // save all key/value pairs from the store
    for (const key in store) {
      delete store[key];
    }
  });

  describe('saves a key/value pair if the key exist', () => {
    it('saves strings', () => {
      store.fruit = 'guava';
      save('fruit', 'papaya');
      expect(store.fruit).toEqual('papaya');
    });
    it('saves numbers', () => {
      store.smiles = 1001;
      save('smiles', 5005);
      expect(store.smiles).toEqual(5005);
    });
    it('saves arrays', () => {
      store.colors = ['red', 'yellow', 'blue'];
      save('colors', ['red', 'yellow', 'blue', 'purple']);
      expect(store.colors).toEqual(['red', 'yellow', 'blue', 'purple']);
    });
  });

  describe('throws an error if the key does not exist', () => {
    it('cannot save keys that do not exist', () => {
      const shouldThrow = () => save('stop', 'error time!');
      expect(shouldThrow).toThrow(ReferenceError);
    });
  });

  describe('checks the type of its parameter', () => {
    it('key must be a string', () => {
      const shouldThrow = () => save(1, 'error time!');
      expect(shouldThrow).toThrow(TypeError);
    });
  });

  describe('deep-clones all values in the store', () => {
    it('the returned value is deeply equal to the stored value', () => {
      store.colors = [];
      const colorsArray = ['red', 'yellow', 'blue'];
      save('colors', colorsArray);
      expect(store.colors).toEqual(colorsArray);
    });
    it('the returned value is not the same array in memory', () => {
      store.colors = [];
      const colorsArray = ['red', 'yellow', 'blue'];
      save('colors', colorsArray);
      const areSameArray = colorsArray === store.colors;
      expect(areSameArray).toEqual(false);
    });
  });
});

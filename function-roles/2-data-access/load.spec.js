import { store } from '../store.js';

import { load } from './load.js';

describe('load: clears the store and loads new data', () => {
  beforeEach(() => {
    // this logic runs before each `it` so that they start with an empty store
    //  remember side-effects!

    // load all key/value pairs from the store
    for (const key in store) {
      delete store[key];
    }
  });

  describe('loads a key/value pair if the key exist', () => {
    it('clears old data from the store', () => {
      store.fruit = 'guava';
      store.smiles = 1001;
      store.colors = ['red', 'yellow', 'blue'];
      load({});
      expect(store).toEqual({});
    });
    it('loads primitive types', () => {
      load({
        string: 'hello',
        number: 1,
        boolean: true,
      });
      expect(store).toEqual({
        string: 'hello',
        number: 1,
        boolean: true,
      });
    });
    it('loads arrays and objects', () => {
      load({
        string: 'hello',
        number: 1,
        boolean: true,
        array: ['red', 'yellow', 'blue', 'purple'],
        object: { a: 1, b: 2 },
      });
      expect(store).toEqual({
        string: 'hello',
        number: 1,
        boolean: true,
        array: ['red', 'yellow', 'blue', 'purple'],
        object: { a: 1, b: 2 },
      });
    });
  });

  describe('checks the type of its parameter', () => {
    it('key must be an object', () => {
      const shouldThrow = () => load(1, 'error time!');
      expect(shouldThrow).toThrow(TypeError);
    });
  });

  describe('deep-clones all values in the store', () => {
    it('the returned value is deeply equal to the stored value', () => {
      const newData = {
        colors: ['red', 'yellow', 'blue', 'purple'],
      };
      load(newData);
      expect(store.colors).toEqual(newData.colors);
    });
    it('the returned value is not the same array in memory', () => {
      const newData = {
        colors: ['red', 'yellow', 'blue', 'purple'],
      };
      load(newData);
      const areSameArray = newData.colors === store.colors;
      expect(areSameArray).toEqual(false);
    });
  });
});

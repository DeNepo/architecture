import { store } from '../store.js';

import { remove } from './remove.js';

describe('remove: removes a key/value pair from the store, if the key exists', () => {
  beforeEach(() => {
    // this logic runs before each `it` so that they start with an empty store
    //  remember side-effects!

    // remove all key/value pairs from the store
    for (const key in store) {
      delete store[key];
    }
  });

  describe('removes a key/value pair if the key exist', () => {
    it('removes strings', () => {
      store.fruit = 'guava';
      remove('fruit');
      expect(store.fruit).toEqual(undefined);
    });
    it('removes numbers', () => {
      store.smiles = 1001;
      remove('smiles');
      expect(store.smiles).toEqual(undefined);
    });
    it('removes arrays', () => {
      store.colors = ['red', 'yellow', 'blue'];
      remove('colors');
      expect(store.colors).toEqual(undefined);
    });
  });

  describe('throws an error if the key does not exist', () => {
    it('cannot remove keys that do not exist', () => {
      const shouldThrow = () => remove('stop', 'error time!');
      expect(shouldThrow).toThrow(ReferenceError);
    });
  });

  describe('checks the type of its parameter', () => {
    it('key must be a string', () => {
      const shouldThrow = () => remove(1, 'error time!');
      expect(shouldThrow).toThrow(TypeError);
    });
  });
});

import { insert } from './insert.js';

import { clear } from './local-storage/clear.js';
import { getItem } from './local-storage/get-item.js';
import { setItem } from './local-storage/set-item.js';

describe('insert: inserts an entry in the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('throws an error if the key already exists', () => {
    setItem('pie', 'apple');
    const insertMissingKey = () => insert('pie', 'pumpkin');
    expect(insertMissingKey).toThrow(ReferenceError);
  });

  describe('inserts a new entry with a given key & value', () => {
    it('toads are not frogs', () => {
      // insert the new entry
      insert('toad', 'not a frog');
      // assert the key's new value
      expect(getItem('toad')).toEqual('not a frog');
    });
    it('can write different types to the same key', () => {
      insert('isOrange', true);
      expect(getItem('isOrange')).toEqual(true);
    });
    it('data should have only 1 key after creating', () => {
      insert('password', 'P@s5w0rD');
      const numberOfKeys = Object.keys(localStorage).length;
      expect(numberOfKeys).toEqual(1);
    });
  });

  describe('insert returns the value you pass in', () => {
    it('returns the same primitive value', () => {
      const newColor = insert('favoriteColor', 'orange');
      expect(newColor).toEqual('orange');
    });
    it('returns the same reference-type value (not a clone!)', () => {
      const newNumbers = [4, 5, 6];
      const returnedNumbers = insert('someNumbers', newNumbers);
      const areSameArray = newNumbers === returnedNumbers;
      expect(areSameArray).toEqual(true);
    });
  });

  describe('insert throws an error if new data is not JSON-friendly', () => {
    it('rejects functions', () => {
      const savingAFunction = () => insert('thing', () => {});
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects undefined', () => {
      const savingAFunction = () => insert('thing', undefined);
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects DOM elements', () => {
      const savingAFunction = () =>
        insert('thing', document.insertElement('div'));
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects objects containing invalid entries', () => {
      const savingAFunction = () =>
        insert('thing', {
          a: () => {},
          b: document.insertElement('div'),
        });
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects arrays containing invalid entries', () => {
      const savingAFunction = () =>
        insert('thing', [() => {}, document.insertElement('div')]);
      expect(savingAFunction).toThrow(TypeError);
    });
  });
});

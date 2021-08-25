import { deepClone } from './deep-clone.js';

describe('deepClone: creates a new array/object that is deeply equal to its argument', () => {
  describe('clones empty arrays and objects', () => {
    it('returns an empty array', () => {
      const actual = deepClone([]);
      expect(actual).toEqual([]);
    });
    it('the array is not the same array that was passed in', () => {
      const arg = [];
      const actual = deepClone(arg);
      const areSameArray = actual === arg;
      expect(areSameArray).toEqual(false);
    });
    it('returns an empty object', () => {
      const actual = deepClone({});
      expect(actual).toEqual({});
    });
    it('the object is not the same object that was passed in', () => {
      const arg = {};
      const actual = deepClone(arg);
      const areSameObject = actual === arg;
      expect(areSameObject).toEqual(false);
    });
  });

  describe('clones nested data structures', () => {
    it('clones a nested array data structure', () => {
      const actual = deepClone([
        true,
        [1, [2, 3], 4],
        'hello',
        { a: 1, b: ['c', 'd'] },
      ]);
      expect(actual).toEqual([
        true,
        [1, [2, 3], 4],
        'hello',
        { a: 1, b: ['c', 'd'] },
      ]);
    });
    it('the array is not the same array that was passed in', () => {
      const arg = [true, [1, [2, 3], 4], 'hello', { a: 1, b: ['c', 'd'] }];
      const actual = deepClone(arg);
      const areSameArray = actual === arg;
      expect(areSameArray).toEqual(false);
    });
    it('clones a nested object data structure', () => {
      const actual = deepClone({
        a: [1, [2, 3], 4],
        b: { x: { he: '!', llo: '!' } },
        c: false,
      });
      expect(actual).toEqual({
        a: [1, [2, 3], 4],
        b: { x: { he: '!', llo: '!' } },
        c: false,
      });
    });
    it('the object is not the same object that was passed in', () => {
      const arg = {
        a: [1, [2, 3], 4],
        b: { x: { he: '!', llo: '!' } },
        c: false,
      };
      const actual = deepClone(arg);
      const areSameObject = actual === arg;
      expect(areSameObject).toEqual(false);
    });
  });
});

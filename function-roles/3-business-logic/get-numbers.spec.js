import { getNumbers } from './get-numbers.js';

import { insert } from '../2-data-access/insert.js';
import { removeAll } from '../2-data-access/remove-all.js';

describe('getNumbers: returns a cloned array of the saved numbers', () => {
  beforeEach(() => {
    removeAll();
  });

  it('reads an empty array', () => {
    insert('numbers', []);
    const numbers = getNumbers();
    expect(numbers).toEqual([]);
  });

  it('reads a non-empty array of numbers in the order they are stored', () => {
    insert('numbers', [2, 1, 4, 3]);
    const numbers = getNumbers();
    expect(numbers).toEqual([2, 1, 4, 3]);
  });

  it('the return value is a clone', () => {
    const toInsert = [];
    insert('numbers', toInsert);
    const numbers = getNumbers();
    const areSameArray = numbers === toInsert;
    expect(areSameArray).toEqual(false);
  });
});

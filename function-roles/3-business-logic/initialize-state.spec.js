import { initializeState } from './initialize-state.js';

import { findAll } from '../2-data-access/find-all.js';
import { removeAll } from '../2-data-access/remove-all.js';

describe('initializeState: initializeStates a data object into state', () => {
  beforeEach(() => {
    removeAll();
  });

  it('clears old data from the store', () => {
    initializeState({});
    const allEntries = findAll();
    expect(allEntries).toEqual([]);
  });

  it('initializeStates primitive types', () => {
    initializeState({
      string: 'hello',
      number: 1,
      boolean: true,
    });
    const allEntries = findAll();
    expect(allEntries).toEqual([
      { key: 'string', value: 'hello' },
      { key: 'number', value: 1 },
      { key: 'boolean', value: true },
    ]);
  });

  it('initializeStates arrays and objects', () => {
    initializeState({
      string: 'hello',
      number: 1,
      boolean: true,
      array: ['red', 'yellow', 'blue', 'purple'],
      object: { a: 1, b: 2 },
    });
    const allEntries = findAll();
    expect(allEntries).toEqual([
      { key: 'string', value: 'hello' },
      { key: 'number', value: 1 },
      { key: 'boolean', value: true },
      { key: 'array', value: ['red', 'yellow', 'blue', 'purple'] },
      { key: 'object', value: { a: 1, b: 2 } },
    ]);
  });
});

import { removeItem } from './remove-item.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { find } from '../../../data-access/find.js';
import { save } from '../../../data-access/save.js';
import { initialize } from '../../../data-access/initialize.js';

describe('removeItem: removes an item from the list by ID', () => {
  beforeEach(() => {
    removeAll();
    initialize({
      items: [],
      filters: {
        done: true,
        notDone: true,
      },
      query: '',
    });
  });

  describe('side-effect in state: "items"', () => {
    it('removes a specific entry if the entry exists', () => {
      save('items', [
        { id: 1, task: '' },
        { id: 2, task: '' },
        { id: 3, task: '' },
      ]);

      removeItem(2);

      const items = find('items');
      expect(items).toEqual([
        { id: 1, task: '' },
        { id: 3, task: '' },
      ]);
    });
    it('changes nothing if the entry does not exist', () => {
      save('items', [
        { id: 1, task: '' },
        { id: 2, task: '' },
        { id: 3, task: '' },
      ]);

      removeItem(4);

      const items = find('items');
      expect(items).toEqual([
        { id: 1, task: '' },
        { id: 2, task: '' },
        { id: 3, task: '' },
      ]);
    });
  });

  describe('removeItem returns the updated items', () => {
    it('removes a specific entry if the entry exists', () => {
      save('items', [
        { id: 1, task: '' },
        { id: 2, task: '' },
        { id: 3, task: '' },
      ]);

      const items = removeItem(2);

      expect(items).toEqual([
        { id: 1, task: '' },
        { id: 3, task: '' },
      ]);
    });
    it('changes nothing if the entry does not exist', () => {
      save('items', [
        { id: 1, task: '' },
        { id: 2, task: '' },
        { id: 3, task: '' },
      ]);

      const items = removeItem(4);

      expect(items).toEqual([
        { id: 1, task: '' },
        { id: 2, task: '' },
        { id: 3, task: '' },
      ]);
    });
  });

  describe('type-guards', () => {
    it('throws a TypeError if the argument is not a number', () => {
      const shouldThrow = () => removeItem(true);
      expect(shouldThrow).toThrow(TypeError);
    });
    it('throws a TypeError if the argument is NaN', () => {
      const shouldThrow = () => removeItem(NaN);
      expect(shouldThrow).toThrow(TypeError);
    });
    it('throws a RangeError if the argument is less than 1', () => {
      const shouldThrow = () => removeItem(-1);
      expect(shouldThrow).toThrow(RangeError);
    });
    it('throws an Error if the argument is not an integer', () => {
      const shouldThrow = () => removeItem(1.5);
      expect(shouldThrow).toThrow(Error);
    });
  });
});

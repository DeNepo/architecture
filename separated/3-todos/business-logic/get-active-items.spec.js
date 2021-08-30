import { getActiveItems } from './get-active-items.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { find } from '../../../data-access/find.js';
import { save } from '../../../data-access/save.js';
import { insert } from '../../../data-access/insert.js';

describe('getActiveItems: returns all items that match the filter and include the query', () => {
  beforeEach(() => {
    removeAll();

    insert('items', [
      { id: 1, done: true, task: 'x' },
      { id: 2, done: true, task: 'y' },
      { id: 3, done: false, task: 'x' },
      { id: 4, done: false, task: 'y' },
    ]);
    insert('filters', {
      done: true,
      notDone: true,
    });
    insert('query', '');
  });

  describe('filters correctly for not/done when there is no query', () => {
    it('gets all items', () => {
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([
        { id: 1, done: true, task: 'x' },
        { id: 2, done: true, task: 'y' },
        { id: 3, done: false, task: 'x' },
        { id: 4, done: false, task: 'y' },
      ]);
    });
    it('gets only done items', () => {
      save('filters', {
        done: true,
        notDone: false,
      });
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([
        { id: 1, done: true, task: 'x' },
        { id: 2, done: true, task: 'y' },
      ]);
    });
    it('gets only not-done items', () => {
      save('filters', {
        done: false,
        notDone: true,
      });
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([
        { id: 3, done: false, task: 'x' },
        { id: 4, done: false, task: 'y' },
      ]);
    });
    it('gets only no items', () => {
      save('filters', {
        done: false,
        notDone: false,
      });
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([]);
    });
  });

  describe('searches correctly when all the filters are true', () => {
    it('gets all items', () => {
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([
        { id: 1, done: true, task: 'x' },
        { id: 2, done: true, task: 'y' },
        { id: 3, done: false, task: 'x' },
        { id: 4, done: false, task: 'y' },
      ]);
    });
    it('gets all items that include "x"', () => {
      save('query', 'x');
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([
        { id: 1, done: true, task: 'x' },
        { id: 3, done: false, task: 'x' },
      ]);
    });
    it('gets all items that include "y"', () => {
      save('query', 'y');
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([
        { id: 2, done: true, task: 'y' },
        { id: 4, done: false, task: 'y' },
      ]);
    });
    it('gets no items when nothing matches the query', () => {
      save('query', 'a');
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([]);
    });
  });

  describe('an active item must match the query and the filters', () => {
    it('gets the done item with task including "x"', () => {
      save('query', 'x');
      save('filters', {
        done: true,
        notDone: false,
      });
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([{ id: 1, done: true, task: 'x' }]);
    });
    it('gets the not-done item with task including "x"', () => {
      save('query', 'x');
      save('filters', {
        done: false,
        notDone: true,
      });
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([{ id: 3, done: false, task: 'x' }]);
    });
    it('gets the done item with task including "y"', () => {
      save('query', 'y');
      save('filters', {
        done: true,
        notDone: false,
      });
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([{ id: 2, done: true, task: 'y' }]);
    });
    it('gets the not-done item with task including "y"', () => {
      save('query', 'y');
      save('filters', {
        done: false,
        notDone: true,
      });
      const activeItems = getActiveItems();
      expect(activeItems).toEqual([{ id: 4, done: false, task: 'y' }]);
    });
  });

  describe('getActiveItems has no side-effects on state', () => {
    it('does not modify items', () => {
      getActiveItems();
      const items = find('items');
      expect(items).toEqual([
        { id: 1, done: true, task: 'x' },
        { id: 2, done: true, task: 'y' },
        { id: 3, done: false, task: 'x' },
        { id: 4, done: false, task: 'y' },
      ]);
    });
    it('does not modify the filters', () => {
      getActiveItems();
      const filters = find('filters');
      expect(filters).toEqual({ done: true, notDone: true });
    });
    it('does not modify the query', () => {
      getActiveItems();
      const query = find('query');
      expect(query).toEqual('');
    });
  });
});

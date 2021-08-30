import { searchEvent } from './search.js';

describe('searchEvent: returns a custom event used when updating an item', () => {
  describe('searches for "water"', () => {
    it('is an event', () => {
      const event = searchEvent('water');
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "search"', () => {
      const event = searchEvent('water');
      expect(event.type).toEqual('search');
    });
    it('bubbles', () => {
      const event = searchEvent('water');
      expect(event.bubbles).toEqual(true);
    });
    it('details: "water"', () => {
      const event = searchEvent('water');
      expect(event.detail).toEqual({ query: 'water' });
    });
  });
  describe('searches for "air"', () => {
    it('is an event', () => {
      const event = searchEvent('air');
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "search"', () => {
      const event = searchEvent('air');
      expect(event.type).toEqual('search');
    });
    it('bubbles', () => {
      const event = searchEvent('air');
      expect(event.bubbles).toEqual(true);
    });
    it('details: "air"', () => {
      const event = searchEvent('air');
      expect(event.detail).toEqual({ query: 'air' });
    });
  });
});

import { filterEvent } from './filter.js';

describe('filterEvent: returns a custom event used for filtering the list', () => {
  describe('filters for only completed items', () => {
    it('is an event', () => {
      const event = filterEvent(true, false);
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "filter"', () => {
      const event = filterEvent(true, false);
      expect(event.type).toEqual('filter');
    });
    it('bubbles', () => {
      const event = filterEvent(true, false);
      expect(event.bubbles).toEqual(true);
    });
    it('details: true & false', () => {
      const event = filterEvent(true, false);
      expect(event.detail).toEqual({ done: true, notDone: false });
    });
  });
  describe('filter for no elements', () => {
    it('is an event', () => {
      const event = filterEvent(false, false);
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "filter"', () => {
      const event = filterEvent(false, false);
      expect(event.type).toEqual('filter');
    });
    it('bubbles', () => {
      const event = filterEvent(false, false);
      expect(event.bubbles).toEqual(true);
    });
    it('details: false & false', () => {
      const event = filterEvent(false, false);
      expect(event.detail).toEqual({ done: false, notDone: false });
    });
  });
});

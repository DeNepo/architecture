import { deleteEvent } from './delete.js';

describe('deleteEvent: returns a custom event used for deleting an item', () => {
  describe('delete an element with ID 4', () => {
    it('is an event', () => {
      const event = deleteEvent(4);
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "delete"', () => {
      const event = deleteEvent(4);
      expect(event.type).toEqual('delete');
    });
    it('bubbles', () => {
      const event = deleteEvent(4);
      expect(event.bubbles).toEqual(true);
    });
    it('details: ID 4', () => {
      const event = deleteEvent(4);
      expect(event.detail).toEqual({ id: 4 });
    });
  });
  describe('delete an element with ID 2', () => {
    it('is an event', () => {
      const event = deleteEvent(2);
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "delete"', () => {
      const event = deleteEvent(2);
      expect(event.type).toEqual('delete');
    });
    it('bubbles', () => {
      const event = deleteEvent(2);
      expect(event.bubbles).toEqual(true);
    });
    it('details: ID 2', () => {
      const event = deleteEvent(2);
      expect(event.detail).toEqual({ id: 2 });
    });
  });
});

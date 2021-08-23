import { updateEvent } from './update.js';

describe('updateEvent: returns a custom event used for updating an item', () => {
  describe('update an element with ID 4', () => {
    it('is an event', () => {
      const event = updateEvent({ id: 4, task: 'asdf', done: false });
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "update"', () => {
      const event = updateEvent({ id: 4, task: 'asdf', done: false });
      expect(event.type).toEqual('update');
    });
    it('bubbles', () => {
      const event = updateEvent({ id: 4, task: 'asdf', done: false });
      expect(event.bubbles).toEqual(true);
    });
    it('details: ID 4', () => {
      const event = updateEvent({ id: 4, task: 'asdf', done: false });
      expect(event.detail).toEqual({
        item: { id: 4, task: 'asdf', done: false },
      });
    });
  });
  describe('update an element with ID 2', () => {
    it('is an event', () => {
      const event = updateEvent({ id: 2, task: 'hello', done: true });
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "update"', () => {
      const event = updateEvent({ id: 2, task: 'hello', done: true });
      expect(event.type).toEqual('update');
    });
    it('bubbles', () => {
      const event = updateEvent({ id: 2, task: 'hello', done: true });
      expect(event.bubbles).toEqual(true);
    });
    it('details: ID 2', () => {
      const event = updateEvent({ id: 2, task: 'hello', done: true });
      expect(event.detail).toEqual({
        item: { id: 2, task: 'hello', done: true },
      });
    });
  });
});

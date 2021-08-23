import { updateEvent } from './update.js';

describe('updateEvent: returns a custom event used when updating an item', () => {
  describe('update the key "water" with value "cold"', () => {
    it('is an event', () => {
      const event = updateEvent('water', 'cold');
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "update"', () => {
      const event = updateEvent('water', 'cold');
      expect(event.type).toEqual('update');
    });
    it('bubbles', () => {
      const event = updateEvent('water', 'cold');
      expect(event.bubbles).toEqual(true);
    });
    it('details: key & value', () => {
      const event = updateEvent('water', 'cold');
      expect(event.detail).toEqual({ key: 'water', value: 'cold' });
    });
  });
  describe('update the key "age" with value 46', () => {
    it('is an event', () => {
      const event = updateEvent('age', 46);
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "update"', () => {
      const event = updateEvent('age', 46);
      expect(event.type).toEqual('update');
    });
    it('bubbles', () => {
      const event = updateEvent('age', 46);
      expect(event.bubbles).toEqual(true);
    });
    it('details: ID 2', () => {
      const event = updateEvent('age', 46);
      expect(event.detail).toEqual({ key: 'age', value: 46 });
    });
  });
});

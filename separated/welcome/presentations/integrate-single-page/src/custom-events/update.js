/**
 * Returns a new event containing the data for a state update.
 *
 * @param {string} key - The key to update.
 * @param {any} value - The new value for that key.
 * @returns {CustomEvent#update} A new event carrying the key & value to update in .detail.
 */
export const updateEvent = (key = '', value) => {
  return new CustomEvent('update', {
    bubbles: true,
    detail: { key, value },
  });
};

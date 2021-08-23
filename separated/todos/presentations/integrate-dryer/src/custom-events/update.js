/**
 * Returns a new event containing the item to update in the list.
 *
 * @param {object} item - An item object to replace in the list.
 * @returns {CustomEvent#update} A new event carrying the new item in .detail.
 */
export const updateEvent = (item = {}) => {
  return new CustomEvent('update', {
    bubbles: true,
    detail: { item },
  });
};

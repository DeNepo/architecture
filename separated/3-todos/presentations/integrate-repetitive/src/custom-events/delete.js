/**
 * Returns a new event containing the id for which item to remove.
 *
 * @param {number} id - Which item to remove.
 * @returns {CustomEvent#delete} A new event carrying the id to remove in .detail.
 */
export const deleteEvent = (id = 0) => {
  return new CustomEvent('delete', {
    bubbles: true,
    detail: { id },
  });
};

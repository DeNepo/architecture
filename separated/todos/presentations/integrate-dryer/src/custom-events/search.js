/**
 * Returns a new event containing the query for a search.
 *
 * @param {string} query - The string to search for in the tasks.
 * @returns {CustomEvent#search} A new event carrying the search query in .detail.
 */
export const searchEvent = (query = '') => {
  return new CustomEvent('search', {
    bubbles: true,
    detail: { query },
  });
};

import { itemChangesHandler } from '../handlers/item-changes.js';
import { viewChangesHandler } from '../handlers/view-changes.js';

export const changesListener = () => {
  document
    .getElementById('search-root')
    .addEventListener('search', viewChangesHandler);
  document
    .getElementById('filter-root')
    .addEventListener('filter', viewChangesHandler);

  document
    .getElementById('list-root')
    .addEventListener('delete', itemChangesHandler);
  document
    .getElementById('list-root')
    .addEventListener('update', itemChangesHandler);
};

import { searchEvent } from '../custom-events/search.js';

/**
 *
 * @param {string} query
 * @returns {HTMLDivElement} A div containing a key description and an input.
 * @fires CustomEvent#update
 */
export const searchFieldComponent = (query = '') => {
  const container = document.createElement('div');
  container.innerHTML = 'search: ';

  const inputEl = document.createElement('input');
  inputEl.value = query;
  inputEl.addEventListener('keyup', (event) => {
    event.stopPropagation();
    const updateEntry = searchEvent(inputEl.value);
    inputEl.dispatchEvent(updateEntry);
  });
  container.appendChild(inputEl);

  return container;
};

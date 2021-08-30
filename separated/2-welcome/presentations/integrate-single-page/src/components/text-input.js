import { updateEvent } from '../custom-events/update.js';

/**
 *
 * @param {*} key
 * @param {*} value
 * @returns {HTMLDivElement} A div containing a key description and an input.
 * @fires CustomEvent#update
 */
export const textInput = (key = '', value = '') => {
  const container = document.createElement('div');
  container.innerHTML = `${key}: `;

  const inputEl = document.createElement('input');
  inputEl.value = value;
  inputEl.addEventListener('keyup', (event) => {
    event.stopPropagation();
    const updateEntry = updateEvent(key, inputEl.value);
    inputEl.dispatchEvent(updateEntry);
  });
  container.appendChild(inputEl);

  return container;
};

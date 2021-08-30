import { filterEvent } from '../custom-events/filter.js';

/**
 * Renders a form where users can select how they want to filter the items.
 *
 * @param {boolean} done - Are the done items checked or not?
 * @param {boolean} notDone - Are the not done items checked or not?
 * @returns {HTMLFormElement} A form with the filtering options.
 * @fires CustomEvent#filter
 */
export const filtersComponent = (done = true, notDone = true) => {
  const formString = `
    <form id='filter-form'>
      filter:

      <input type='checkbox' ${done ? 'checked' : ''} name='done' /> done

      <input type='checkbox' ${notDone ? 'checked' : ''} name='notDone' />
      not done
    </form>`;

  const formElement = new DOMParser().parseFromString(formString, 'text/html')
    .body.firstChild;

  formElement.addEventListener('change', () => {
    const [doneInput, notDoneInput] = Array.from(formElement);
    const done = doneInput.checked;
    const notDone = notDoneInput.checked;
    const newEvent = filterEvent(done, notDone);
    formElement.dispatchEvent(newEvent);
  });

  return formElement;
};

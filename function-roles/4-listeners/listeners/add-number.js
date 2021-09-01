import { addNumber } from '../../3-business-logic/add-number.js';
import { getNumbers } from '../../3-business-logic/get-numbers.js';
import { getSorted } from '../../3-business-logic/get-sorted.js';

export const addNumberListener = () => {
  document
    .getElementById('number-input')
    .addEventListener('change', (event) => {
      debugger; // entry point: user interaction

      // read user input
      const newNumber = Number(event.target.value);

      // update state
      addNumber(newNumber);

      // read state
      const unsortedNumbers = getNumbers();
      const sortedNumbers = getSorted();

      // update the UI
      document.getElementById(
        'unsorted',
      ).innerHTML = `unsorted:\n${unsortedNumbers.join('\n')}`;

      document.getElementById(
        'sorted',
      ).innerHTML = `sorted:\n${sortedNumbers.join('\n')}`;
    });
};

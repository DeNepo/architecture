import { addNumber } from '../../3-business-logic/add-number.js';
import { getNumbers } from '../../3-business-logic/get-numbers.js';
import { getSorted } from '../../3-business-logic/get-sorted.js';

import { listComponent } from '../components/list.js';

export const addNumberHandler = (event) => {
  // read user input
  const newNumber = Number(event.target.value);

  // update state
  addNumber(newNumber);

  // read state
  const unsortedNumbers = getNumbers();
  const sortedNumbers = getSorted();

  // update the UI
  const unsortedRoot = document.getElementById('unsorted');
  unsortedRoot.innerHTML = `unsorted:`;
  unsortedRoot.appendChild(listComponent(unsortedNumbers));

  const sortedRoot = document.getElementById('sorted');
  sortedRoot.innerHTML = `sorted:`;
  sortedRoot.appendChild(listComponent(sortedNumbers));
};

import { initializeState } from './initialize-state.js';
import { addNumber } from './add-number.js';
import { getNumbers } from './get-numbers.js';
import { getSorted } from './get-sorted.js';

initializeState({
  numbers: [],
});

addNumber(4);
addNumber(3);
addNumber(2);
addNumber(1);

const unsortedNumbers = getNumbers();
console.log('unsorted numbers:', unsortedNumbers); // -> [4, 3, 2, 1]

const sortedNumbers = getSorted();
console.log('sorted numbers:', sortedNumbers); // -> [1, 2, 3, 4]

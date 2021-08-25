import { addNumberHandler } from '../handlers/add-number.js';

export const addNumberListener = () => {
  document
    .getElementById('number-input')
    .addEventListener('change', addNumberHandler);
};

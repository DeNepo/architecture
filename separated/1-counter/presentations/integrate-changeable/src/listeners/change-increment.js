import { changeIncrementHandler } from '../handlers/change-increment.js';

export const changeIncrementListener = () => {
  document
    .getElementById('increment-input')
    .addEventListener('change', changeIncrementHandler);
};

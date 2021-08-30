import { save } from '../../../data-access/save.js';

export const updateGreeting = (newValue) => {
  save('greeting', newValue);
  return newValue;
};

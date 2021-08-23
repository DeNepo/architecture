import { save } from '../../../data-access/save.js';

export const updateGreeting = (newValue) => {
  return save('greeting', newValue);
};

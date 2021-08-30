import { save } from '../../../data-access/save.js';

export const updateMessage = (newValue) => {
  save('message', newValue);
  return newValue;
};

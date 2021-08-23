import { save } from '../../../data-access/save.js';

export const updateMessage = (newValue) => {
  return save('message', newValue);
};

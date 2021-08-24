import { initialize } from './controllers/initialize.js';
import { editGreeting } from './controllers/edit-greeting.js';
import { editMessage } from './controllers/edit-message.js';
import { welcome } from './controllers/welcome.js';

export const init = async () => {
  await initialize();

  return {
    editGreeting,
    editMessage,
    welcome,
  };
};

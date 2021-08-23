import { editGreeting } from './controllers/edit-greeting.js';
import { editMessage } from './controllers/edit-message.js';
import { welcome } from './controllers/welcome.js';

// initialize state
import { initialize } from '../../../../../data-access/initialize.js';
import { friendly } from '../../../data/friendly.js';

initialize(friendly);

export const app = {
  editGreeting,
  editMessage,
  welcome,
};

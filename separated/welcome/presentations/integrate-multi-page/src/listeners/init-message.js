import { updateState } from '../handlers/update-state.js';
import { initMessage } from '../handlers/init-message.js';

export const initMessageListener = () => {
  window.addEventListener('DOMContentLoaded', initMessage);

  document
    .getElementById('update-input')
    .addEventListener('update', updateState);
};

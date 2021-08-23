import { updateState } from '../handlers/update-state.js';

export const editDataListener = () => {
  document.getElementById('inputs').addEventListener('update', updateState);
};

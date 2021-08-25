import { initIndex } from '../handlers/init-index.js';

export const initIndexListener = () => {
  document.addEventListener('DOMContentLoaded', initIndex);
};

import { initIndex } from '../handlers/init-index.js';

export const initIndexListener = () => {
  window.addEventListener('DOMContentLoaded', initIndex);
};

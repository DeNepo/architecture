import { stepHandler } from '../handlers/step.js';

export const stepListener = () => {
  document.getElementById('up').addEventListener('click', stepHandler);
  document.getElementById('down').addEventListener('click', stepHandler);
};

import { initializeState } from '../../../../business-logic/initialize-state.js';
import { get } from '../../../../business-logic/get.js';

export const initializeApp = () => {
  initializeState();

  // initialize number
  document.getElementById('value').innerHTML = get('value');
};

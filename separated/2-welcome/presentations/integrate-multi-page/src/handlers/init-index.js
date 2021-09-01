import { initializeState } from '../../../../business-logic/initialize-state.js';
import { beWelcoming } from '../../../../business-logic/be-welcoming.js';

import { navbar } from '../components/navbar.js';
import { footer } from '../components/footer.js';

export const initIndex = async () => {
  debugger; // index.html entry point: initialize state & UI

  await initializeState();

  document.getElementById('navbar-container').appendChild(navbar());
  document.getElementById('footer-container').appendChild(footer());

  document.getElementById('words').innerHTML = beWelcoming();
};

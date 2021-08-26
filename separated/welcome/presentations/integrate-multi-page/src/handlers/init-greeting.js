import { initializeState } from '../../../../business-logic/initialize-state.js';
import { readGreeting } from '../../../../business-logic/read-greeting.js';

import { navbar } from '../components/navbar.js';
import { footer } from '../components/footer.js';

import { textInput } from '../components/text-input.js';

export const initGreeting = async () => {
  await initializeState('../../../../data/friendly.json', import.meta);

  document.getElementById('navbar-container').appendChild(navbar());
  document.getElementById('footer-container').appendChild(footer());

  const value = readGreeting();
  const inputEl = textInput('greeting', value);
  document.getElementById('update-input').appendChild(inputEl);
};

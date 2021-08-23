import { textInput } from '../components/text-input.js';

import { readGreeting } from '../../../../business-logic/read-greeting.js';
import { readMessage } from '../../../../business-logic/read-message.js';
import { beWelcoming } from '../../../../business-logic/be-welcoming.js';

export const initIndex = () => {
  document.getElementById('words').innerHTML = beWelcoming();

  const inputsContainer = document.getElementById('inputs');

  const greetingEl = textInput('greeting', readGreeting());
  inputsContainer.appendChild(greetingEl);

  const messageEl = textInput('message', readMessage());
  inputsContainer.appendChild(messageEl);
};

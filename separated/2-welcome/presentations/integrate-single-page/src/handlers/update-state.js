import { updateGreeting } from '../../../../business-logic/update-greeting.js';
import { updateMessage } from '../../../../business-logic/update-message.js';
import { beWelcoming } from '../../../../business-logic/be-welcoming.js';

export const updateState = (event) => {
  console.log('updating state');

  // read user input
  const key = event.detail.key;
  const newValue = event.detail.value;

  // execute core logic
  if (key === 'message') {
    updateMessage(newValue);
  } else if (key === 'greeting') {
    updateGreeting(newValue);
  }

  // update user interface
  document.getElementById('words').innerHTML = beWelcoming();
};

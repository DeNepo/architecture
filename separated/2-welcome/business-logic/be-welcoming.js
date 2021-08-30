import { find } from '../../../data-access/find.js';

export const beWelcoming = () => {
  const greeting = find('greeting');
  const message = find('message');

  let welcomeMessage = '';
  if (greeting) {
    welcomeMessage += `${greeting}!`;
  }
  if (greeting && message) {
    welcomeMessage += ' ';
  }
  if (message) {
    welcomeMessage += `${message}.`;
  }

  return welcomeMessage;
};

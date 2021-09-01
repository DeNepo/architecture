import { step } from '../../../../business-logic/step.js';

export const stepHandler = (event) => {
  debugger; // entry point: user interaction

  // read user input
  const action = event.target.id;

  // log action for developer
  console.log('stepping ' + action);

  // call business logic
  const steppedValue = step(action);

  // update UI
  document.getElementById('value').innerHTML = steppedValue;
};

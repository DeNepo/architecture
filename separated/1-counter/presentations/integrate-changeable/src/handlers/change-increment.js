import { updateIncrement } from '../../../../business-logic/update-increment.js';

export const changeIncrementHandler = (event) => {
  // read user input
  const newIncrementString = event.target.value;
  const newIncrement = Number(newIncrementString);

  // log action for developer
  console.log('changing increment to ', newIncrement);

  // call the business logic
  updateIncrement(newIncrement);
};

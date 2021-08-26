import { initializeState } from '../../../../business-logic/initialize-state.js';

export const initialize = async () => {
  await initializeState('../../../../data/todos.json', import.meta);
};

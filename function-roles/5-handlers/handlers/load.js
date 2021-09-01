import { initializeState } from '../../3-business-logic/initialize-state.js';

export const loadHandler = () => {
  debugger; // entry point: initialize state & UI

  initializeState({
    numbers: [],
  });
};

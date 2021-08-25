import { initializeState } from '../../3-business-logic/initialize-state.js';

export const loadHandler = () => {
  initializeState({
    numbers: [],
  });
};

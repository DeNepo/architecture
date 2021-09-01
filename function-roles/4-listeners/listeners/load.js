import { initializeState } from '../../3-business-logic/initialize-state.js';

export const loadListener = () => {
  document.addEventListener('DOMContentLoaded', () => {
    debugger; // entry point: state & UI initialization

    initializeState({
      numbers: [],
    });
  };);
};

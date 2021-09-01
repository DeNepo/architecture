import { loadListener } from '../listeners/load.js';
import { stepListener } from '../listeners/step.js';
import { changeIncrementListener } from '../listeners/change-increment.js';

debugger; // entry point: attach event listener

loadListener();
stepListener();
changeIncrementListener();

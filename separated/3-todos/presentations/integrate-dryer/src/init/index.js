import { loadListener } from '../listeners/load.js';

import { createItemListener } from '../listeners/create-item.js';

import { changesListener } from '../listeners/changes.js';

debugger; // entry point: attach event listeners

loadListener();

createItemListener('create-new-item');

changesListener();

import './state.js';

import { initIndexListener } from '../listeners/init-index.js';
import { editDataListener } from '../listeners/edit-data.js';

initIndexListener();
editDataListener();

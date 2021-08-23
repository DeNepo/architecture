import './state.js';

import { loadListener } from '../listeners/load.js';

import { createItemListener } from '../listeners/create-item.js';
import { deleteItemListener } from '../listeners/delete-item.js';
import { updateItemListener } from '../listeners/update-item.js';
import { filterListener } from '../listeners/filter.js';
import { searchListener } from '../listeners/search.js';

loadListener();

createItemListener('create-new-item');

const listContainerId = 'list-root';

deleteItemListener(listContainerId);
updateItemListener(listContainerId);

filterListener('filter-root');
searchListener('search-query');

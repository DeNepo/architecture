import { find } from '../../../data-access/find.js';

export const getActiveItems = () => {
  // read state
  const items = find('items');
  const { done, notDone } = find('filters');
  const query = find('query');

  // do logic things
  const activeItems = items
    // keep items that include the search query
    .filter((item) => item.task.includes(query))
    // keep done items if the 'done' filter is true
    .filter((item) => (item.done === true ? done : true))
    // keep not-done items if the 'notDone' filter is true
    .filter((item) => (item.done === false ? notDone : true));

  // return result
  return activeItems;
};

import { itemComponent } from './item.js';

export const listComponent = (list = []) => {
  const listContainer = document.createElement('div');

  const listEl = document.createElement('ul');
  listEl.className = 'items-list';
  for (const item of list) {
    listEl.appendChild(itemComponent(item));
  }
  listContainer.appendChild(listEl);

  return listContainer;
};

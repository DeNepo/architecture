export const save = (key = '', value) => {
  if (typeof key !== 'string') {
    throw new TypeError(`key is not a string`);
  }

  if (localStorage.getItem(key) === null) {
    throw new ReferenceError(`cannot save: "${key}" is not in store`);
  } else {
    console.groupCollapsed(`: save "${key}":`, value);
    console.trace();
    console.groupEnd();

    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
  }
};

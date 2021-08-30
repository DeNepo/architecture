export const find = (key = '') => {
  if (typeof key !== 'string') {
    throw new TypeError(`key is not a string`);
  }

  if (localStorage.getItem(key) === null) {
    throw new ReferenceError(`cannot find: "${key}" is not in store`);
  } else {
    const value = JSON.parse(localStorage.getItem(key));

    console.groupCollapsed(`: find "${key}":`, value);
    console.trace();
    console.groupEnd();

    return value;
  }
};

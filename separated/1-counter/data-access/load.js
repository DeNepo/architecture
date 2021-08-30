export const load = (data = {}) => {
  if (data === null || typeof data !== 'object') {
    throw new TypeError('data is not an object');
  }

  // clear old data
  localStorage.clear();

  // load new data
  console.log(': ... loading');

  for (const key in data) {
    const value = JSON.stringify(data[key]);
    localStorage.setItem(key, value);
  }

  // log new state
  console.log(': new state:', data);
};

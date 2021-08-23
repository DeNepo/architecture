export let store;

try {
  store = localStorage;
} catch (err) {
  store = Object.create({
    getItem(key = '') {
      return key in this ? this[key] : null;
    },
    removeItem(key = '') {
      delete this[key];
    },
    setItem(key = '', value) {
      this[key] = String(value);
    },
    clear() {
      Object.keys(this).forEach((key) => delete this[key]);
    },
  });
}

# Data Access

Functions you can use in your Business Logic to access and modify program state.

these functions will work in the browser or in Node:

- in the browser they are an abstraction over `localStorage` to explore persistance and to (sort-of) emulate databases in the browser for small projects.
- in Node.js they accesses an object in memory - data will not be persisted. this is just for studying /isolate

---

each function is stored in a separate file so that all actions are easily visible, and so that dependency graphs clearly indicate which actions are used where.

they're at the root of this repo because all the examples and exercises use them.

The data access layer in this example uses `localStorage`, but that doesn't matter to the Business Logic! All the business logic "knows" is that it can call functions named `load`, `save` and `find`. Where and how the data is stored doesn't matter:

- **Data Access API** (_business logic needs to know this_):
  - 3 functions - `load`, `find`, `save`
- **Data Access Internal Code** (_business logic does not need to know this_):
  - reading & writing to `localStorage`

You could rewrite the Data Access layer to save into an object, or an array, or `sessionStorage` or cookies, ... and you wouldn't need to change a singe like of code in the Business Logic or Presentation layers. Where the data is stored has been _abstracted_ behind the Data Access functions.

The magic of abstraction and layers : )

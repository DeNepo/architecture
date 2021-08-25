// no need to import the store!
//  the functions access the store for you
//  that's the whole point of a data access layer ;)

import { load } from './load.js';
import { insert } from './insert.js';
import { find } from './find.js';
import { findAll } from './find-all.js';
import { save } from './save.js';
import { remove } from './remove.js';

// --- initialize store ---

debugger;

const data = {
  userName: 'pilyard',
  name: 'louisa',
  age: 31,
  email: 'pily.ard@somewhere.org',
};

load(data);

// --- create a new field ---

insert('hair', 'orange');

const hairColor = find('hair');
console.log("louisa's hair color is " + hairColor);

// --- update an existing field ---

save('age', 32);

const newAge = find('age');
console.log(`louisa is now ${newAge}`);

// --- delete a field ---

remove('email');
console.log('email has been removed');

// --- final state ---

console.log('final key/value pairs in store:', findAll());
console.log('initial data has not changed:', data);

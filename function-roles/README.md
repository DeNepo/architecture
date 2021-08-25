# Function Roles

In this module, you'll be exploring the concepts of _Software Architecture_ and _Layers_ by learning to use several new function roles.

At first it will feel like extra work compared to the last module, but after some time you will appreciate how much easier it is to plan, collaborate and test code that is structured into these 3 _layers_:

1. _Data Access_: reads & writes from program state
2. _Business Logic_: isolates the tricky logic in your program
3. _Presentation_: allows the user to interact with your business logic

## The Roles

And finally, the 7 function roles you will use in this module:

1. **Utils**
1. **Data Access**
1. **Business Logic**
1. **Listeners**
1. **Handlers**
1. **Components**
1. **Custom Events**.

As you study your way around the internet it's important to keep in mind that these roles are not standard everywhere. Different resources may use different terms, or may not even talk about function roles at all. These roles are just a helpful way for you to organize your thoughts as you read and write your first programs.

---

### 1. Utils

These are **pure functions**, the kind of function you studied in Behavior, Strategy, Implementation. They take in JS data, transform it, and return a new value. Unlike _handlers_ or _procedures_ which can interact with the user interface, util functions are easy to test and document because their behavior is predictable - the same arguments will always give the same return value.

Writing programs that use util functions will make your code more readable, and unit testing your util gives confidence that you program works as it should.

Logic functions are responsible for the many complicated things you may need to do with a user's data, for example finding their favorite movies from an array or making sure an email is valid . Here's a checklist you can use to see if a function is playing the role of **util** in your program:

- it must take in JS data as arguments
- it must return new JS data
- it has unit tests - `expect(actual).toEqual(expected)`
- it _does not_ interact with the user in any way (DOM, `prompt`, `alert`, `confirm`)
- it can `import` from:
  - _utils_
- it can `export` to:
  - _utils_

---

### 2. Data Access

These _are not_ pure functions. Their role is to read and write to your program's state (data). Each time you call them, their behavior will depend on the current _state_ of your data.

"Why a separate role?" you ask. "Why not just update the data in our handlers?". Because of **Abstraction** and **Layers**! A well-designed program will have several layers between the user and the program state, each layer responsible for one type of work.

Data Access functions _abstract_ your data source so that the rest of your program doesn't need to worry about how it's stored. By writing a function called `findAll` that returns all the data in your state, your handlers don't need to know how the data is stored: in an array, an object, _localStorage_ or a far-away server.

You could even change how your data is stored without changing the rest of your program! All you need to do is change the functions in your Data Access Layer.

- it reads and writes the program data
- it can take in JS data as arguments
- it can return new JS data
- it has unit tests - `beforeEach`, `expect(actual).toEqual(expected)`
- it _does not_ interact with the user in any way (DOM, `prompt`, `alert`, `confirm`)
- it can `import` from:
  - _utils_
  - _data-access_
- it can `export` to:
  - _data-access_
  - _business-logic_

---

### 3. Business Logic

These are the heart of your application. At their heart, a user story is about what a user can do with your program data. The Business Logic layer makes that magic happen. A Business Logic function will take cleaned input from the user interface, read/write program state, and return new data to be rendered into the UI.

- it _does not_ access program state directly
- it can take in JS data as arguments and can return new JS data
- it has unit tests - `beforeEach`, `expect(actual).toEqual(expected)`
- it _does not_ interact with the user in any way (DOM, `prompt`, `alert`, `confirm`)
- it can `import` from:
  - _utils_
  - _data-access_
  - _business-logic_
- it can `export` to:
  - _business-logic_
  - _handlers_

---

### 4. Event Listeners

Just like the event listeners from last module, only wrapped in a function so you can call them from the `init` file.

- it can take in JS data as arguments
- it can read from the DOM to get the elements that need listeners
- it _does not_ interact with the user or modify the DOM
- it can `import` from:
  - _utils_
  - _handlers_
- it can `export` to:
  - `/init` files

---

### 5. Event Handlers

JavaScript programs are [_event-driven_](https://en.wikipedia.org/wiki/Event-driven_programming). This is a fancy way to say that websites react to what a user does. For example:

- **a `"click"` event**: when a user clicks a button the background changes color.
- **a `"mouseover"` event**: When a user hovers over a word an image is shown.
- **a `"keyup"` event**: As a user types their search suggestions are displayed under the search bar.

If these examples makes you think of a user story, then you're thinking in the right direction. Event handlers are often the [**_entry point_**](https://en.wikipedia.org/wiki/Entry_point) for user interactions. "**Entry Point**" is just a fancy way to say "the first thing that happens". So when a user interacts with your web page a few things happen:

1. A new _event_ is created. Events are a special kind of object in JavaScript that have lots of useful information like where the event occurred on the screen, what type of interaction occurred, or what input a user provided. The browser will do this behind the scenes.
2. Your event handler is called with this new event as an argument, the browser will also do this for you. And so a user story begins.

Event handlers are the functions responsible for reading user input from events and using other functions to make a user story happen. Here is a little checklist to help you know if a function is being used as an event handler:

- it is passed as a callback to `_.addEventListener('interaction', handler)`
- it does interact with the user by reading their input and updating the UI
- it takes either no parameters, or only one `event` parameter
- it can return `true` or `false`, but that's a technical thing for the browser
- it can `import` from:
  - _utils_
  - _business-logic_
- it can `export` to:
  - _listeners_

---

### 6. Components

Components are functions that return a _component_ of the user interface. The term "component" is very common in web development and depending on which language or framework you are using, it's exact definition can change. For now a component is just a function that returns a DOM element.

Remember _component-based design_ from UX/UI? This is it! In this module you will begin learning how to write functions that return the UI components planned by the designer. When you create a wireframe, you will need to think about how it can be broken into components. Once you have a plan for the components in your page you can begin developing and testing each component separately before integrating them into a full page.

Here is a little checklist to help you find out if a function is being used as a component:

- it returns a DOM element
- if it has parameters, they are plain JS data
- it may have unit tests or a `test.html` file
- it does not modify the DOM, or read from any element other than itself
- it can `import` from:
  - _utils_
  - _components_
  - _custom-events_
- it can `export` to:
  - _handlers_
  - _components_

Even components can have different roles! You'll learn more about this in the following module (Single Page Apps) when your entire UI is rendered using components. No more HTML :) Here's a little preview:

#### Testing Components

One huge benefit of developing your application with components is that you can test each part of the UI in isolation before integrating them into your website. For now you will learn to test your components in two different ways:

- **_Structure_**: Does your rendered component have the correct DOM structure? The right number of children, the right `.className`, the right `.tagName`, ... all with unit tests exactly like you learned for util functions. You will use a file called `component-name.spec.js` to write your component unit tests.
- **_Behavior_**: Does your component do the right thing when rendered into a web page? Does it react to the user in the correct way? Does it look right when it's rendered with it's styles into a web page? You will test your component's _behavior_ by rendering it into an HTML document with different arguments and using/inspecting it to make sure it works correctly. You will do this in a file called `component-name.test.html`.

---

### 7. Custom Events

Custom events are a very useful way to share data across different parts of your user interface. Custom Events behave just like native events (`click`, `mouseover`, ...) but can be customized to have a different `.type` and to carry any data you want in the `.detail` property.

There are many interactions that would be complicated to implement without Custom Events that become easy once you figure them out. Stick with it! It's worth the effort.

- it returns a `CustomEvent`
- if it has parameters, they are plain JS data
- it may have unit tests
- it does not modify or read from the DOM
- it can `import` from:
  - _utils_
- it can `export` to:
  - _components_
  - _handlers_

#### Documenting Custom Events

You need to document a custom event in two places.

1. _Document the function that returns the event:_

   ```js
   /**
    * Returns a new custom event for greeting someone.
    *
    * @param {string} [greeting=''] - The greeting to use.
    * @returns {CustomEvent#greet} - The event carrying the greeting.
    */
   export const greetEvent = (greeting = '') => {
     return new CustomEvent('greet', {
       bubbles: true,
       detail: { greeting },
     });
   };
   ```

1. _Document the component that uses it:_

   ```js
   import { greetEvent } from '../custom-events/greet.js';

   /**
    * Returns a new input element where a user can type their greeting.
    *
    * @param {string} [initialGreeting=''] - The greeting to set as initial value for the input.
    * @returns {HTMLInputElement} - The input where the user will write their greeting.
    * @emits CustomElement#greet
    */
   export const greetingInputComponent = (initialGreeting = '') => {
     const inputEl = document.createElement('input');
     inputEl.value = initialGreeting;

     // intercept the event each time the user changes the input's value
     inputEl.addEventListener('change', (event) => {
       // prevent the native 'change' event from bubbling up
       event.stopPropagation();
       // create a new custom event containing the new greeting
       const newGreetingEvent = greetEvent(inputEl.value);
       // dispatch the event so it bubbles up through the DOM
       inputEl.dispatchEvent(newGreetingEvent);
     });

     return inputEl;
   };
   ```

Then you can listen for this event like you would a native event:

```js
document.getElementById('input-root').addEventListener('greet', (event) => {
  // read the user data from the custom event's .detail property
  const greeting = event.detail.greeting;
  // do something with the user's data
  console.log(greeting);
});
```

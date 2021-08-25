# Architecture

> "We're talking about boxes and lines. We're talking about the big picture."
>
> - [GetCloudSkills](https://www.youtube.com/watch?v=i7aKW7YNOxY)

## Contents

- [Getting Started](#getting-started)
- [Study Tips](#study-tips)
- [Learning Objectives](#learning-objectives)
- [About the Projects](#about-the)
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
  - [Week 4](#week-4)
- [Class Recordings](#class-recordings.md)
- [Curriculum](https://home.hackyourfuture.be/curriculum) (external)
- [HYF Home](https://home.hackyourfuture.be/) (external)

---

## Getting Started

How to study the code in this repo.

<details>
<summary>setting up study-lenses</summary>
<br>

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install o update the `study-lenses` package globally
   - `$ npm install -g study-lenses` (if you do not have it installed)
   - `$ npm update -g study-lenses` (if you already have it installed)
   - Didn't work? you may need to try:
     - (mac) `$ sudo npm install -g study-lenses`
   - having trouble updating?
     - try this: `$ npm uninstall -g study-lenses && npm install -g study-lenses`
2. Fork and clone this repository:
   1. fork the HackYourFuture repository to your personal account
      - `git@github.com:HackYourFutureBelgium/architecture.git`
   2. clone your fork to your computer
   3. when there are updates to the module:
      1. update your fork with a PR
      2. pull the changes from your fork to your computer
3. Navigate to the module repository in terminal
   - `$ cd architecture`
4. Run the `study` command from your CLI
   - `$ study`
5. The material will open in your default browser, you're good to go!
   - you can read the `study-lenses` user guide from your browser by navigating to `localhost:xxxx?--help`

> If you use windows and get this error:
>
> - `..dy.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

</details>

### `npm run install`

install everything.

### `npm run test -- path/to/file.spec.js`

You can run tests in this repository using the `test` script, it will run all the tests in the path you provide.

If you do `npm run test` or `npm run test -- ./` it will run every test in this repository. (there are a lot)

### `npm run document -- path/to/src`

> Pro Tip: do not use `npm run document` without a specific path, it is very slow!

This script will build a dependency graph for all the JavaScript files inside a specific `/src` folder. It can be very helpful to run the document script every time you add/remove a file or change the `import`/`export`s in an exercise.

If you run this script at a higher directory, like `./`, it will document all of the `/src` folders inside that directory.

### `npm run format -- path/`

This script will format all of the code in the path you provide.

### Linting

There is no linting script in this repository. It's for practice only, no need to check every detail. Your project starter repositories will have linting scripts.

[TOP](#architecture)

---

## Study Tips

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is a very effective way to learn programming.
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer.
- Take a look through the [Learning From Code](https://study.hackyourfuture.be/learning/learning-from-code) guide for more study tips

### Priorities

If you can't finish all the material in this repository, that's expected! Anything you don't finish now will always be waiting for you to review when you need it. These 3 emoji's will help you prioritize your study time and to measure your progress:

- 🥚 `:egg:` - Understanding this material is required, it covers the base skills you'll need for this module and the next. You do not need to finish all of them but should feel comfortable that you could with enough time.
- 🐣 `:hatching_chick:` - Do your best to start this material. you don't need to master it or finish it but getting the main idea will be helpful for taking the next steps.
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges.

### Hashtags

There's sooo many examples and exercises in this repository, it's easy to forget of what you still need to finish or what you want to review again. Luckily VSCode is really good at searching through folders of code.

You can write hashtags in your comments while you're studying, then search for those hashtags later so you don't miss anything. Here's some ideas:

- `// #not-done, still a few blanks left` - search for `#not-done` in VScode to find all the exercises you've started and not finished
- `// coercion is confusing, #review this again next week` - search for `#review` to find the files you need to study again
- ... anything goes! Find the hashtags that work for you

### Module Project Boards

If you create a fork of this repository you can open a project board in your fork to track your progress through the module. Just 3 columns can be enough: _Todo_, _Doing_, _Done_.

[TOP](#architecture)

---

## Learning Objectives

What you can expect to learn in this module

<details>
<summary>expand/collapse</summary>

- 🥚 **State**: You understand the concept of state as the data stored in your application _at each moment_. You can explain how state is _rendered_ into a user interface, and can explain how each user interaction reads/writes from state.
- 🥚 **Persistence**: You can explain what _persistence_ means and how it can be implemented in the browser using `localStorage`. When you encounter a bug in your code based persisted data, you can use `localStorage.clear()` and a page refresh to reset your project's state.
- 🥚 **Data-First Development**: You understand applications as data + user interactions. You can demonstrate this by _starting_ your planning process with the data you will need and building a user interface to show that data to a user.
- 🥚 **Architecture & Layers**: You can explain what software architecture is and the importance of layers for testing, collaboration, and maintenance. These are the layers you will learn to use, from the "back" to the "front":
  - **_Data Access_**: This layer is responsible for _persisting_ your data, reading and writing from wherever it is stored. This layer has no fancy logic, it just gets things and puts things away again.
  - **_Business Logic_**: This layer is responsible for all the important _actions_ in your application. The Business Logic layer _does not ever_ interact directly with the user or the user interface. Instead it takes in JS data from the Presentation layer, reads/writes state via the Data Access layer, and returns new data for the Presentation Layer to render.
  - **_Presentation_**: This is the layer you studied in Separation of Concerns. It renders program state for the user, and handles their interactions. It's possible to different presentation layers for the same business logic!
- 🥚 **Function Roles**: You can use these new function roles while planning and developing your projects:
  - **_Data Access_**: Functions that insert (create), find (read), save (update), remove (delete) entries in your saved data. These are provided for you in this module. Data Access functions can only import `utils` and other data access functions.
  - **_Business Logic_**: Functions that take in JS data, read/update state, and return new data. these can be called from handlers, components, or other business logic. Business Logic functions can only import `utils`, `data-access` and other `business-logic` functions.
  - **_Handlers_**: The same role as in Separation of Concerns, only now with a few more restrictions. Handlers _can not_ use _data_ directly or use _data access_ functions. They can only import _Business Logic_, _Components_ and _Utils_.
  - **_Custom Events_**: Functions that return a `new CustomEvent` with your choice of `.type`, and data stored in the it's `.details` property. These will be very helpful for creating testable and reuseable components in your frontend. Custom Events can only import `utils`
- 🥚 **Development Steps**:
- 🐣 **Nested Data**: Given a nested data structure containing arrays, objects and primitive values, you can 1) access a given value 2) update a given entry 3) filter the data
- 🐣 **Matching a JSON Schemas**: You can write an object or array that matches a JSON schema.
- 🐣 **Using a Library**: You can select which functions from the `/data-access` library to use in your Business Logic functions. This includes reading the documentation, tests and source code to understand how the Data Access functions work.
- 🐣 **Stateful Testing**: You can pass and write unit tests for stateful functions - using `beforeEach` to reset state before each test, and testing for the _correct_ side-effects in state.
- 🐥 **TDD + Reverse Engineering**: Given unit tests for the _business logic_ and an obfuscated demo of the interface, you can build a working application that passes the tests and matches the demo.
- 🐥 **Writing a JSON Schemas**: You can write a JSON schema that matches several data instances.

</details>
<br>

[TOP](#architecture)

---

## About the Projects

> template project for this module: [architecture-starter](https://github.com/HackYourFutureBelgium/architecture-starter)

<details>
<summary>expand/collapse</summary>

### Layer 0: `localStorage`

### Layer 1: Data Access

### Layer 2: Business Logic

### Layer 3: Presentation

#### Isolate

#### Integrate

</details>
<br>

[TOP](#architecture)

---

## Suggested Study

Helpful links, examples and exercises.

<details>
<summary>expand/collapse</summary>
<br>

### In this Repo

- examples
  - 🥚 [/stepped](./stepped): study HTML/CSS/JS projects built up step-by-step (only examples)
  - 🥚 [/separated](./separated): study HTML/CSS/JS projects that have been separated by concern (only examples)
- exercises
  - 🐣 [/json-schemas](./json-schemas): learn to describe JS data using a _schema_, and how to validate data against a schema.

</details>
<br>

[TOP](#architecture)

---

## Week 1

<details>
<summary>expand/collapse</summary>

### Before Class

### During Class

#### Before Break

#### After Break

### After Class

</details>
<br>

[TOP](#architecture)

---

## Week 2

<details>
<summary>expand/collapse</summary>

### Before Class

### During Class

#### Before Break

#### After Break

### After Class

</details>
<br>

[TOP](#architecture)

---

## Week 3

<details>
<summary>expand/collapse</summary>

### Before Class

### During Class

#### Before Break

#### After Break

### After Class

</details>
<br>

[TOP](#architecture)

---

## Week 4

<details>
<summary>expand/collapse</summary>

### Before Class

### During Class

#### Before Break

#### After Break

### After Class

</details>
<br>

[TOP](#architecture)

---

# Class Recordings

- **Students**: Here you can find recordings of this module from past classes. Enjoy!
- **Coaches**: When sending your PR's with links please ...
  - Indicate which class you were teaching
  - Which week it was (if the module is more than 1 week)
  - Give your name
  - and a helpful description

<details>
<summary>expand/collapse</summary>

</details>

[TOP](#architecture)

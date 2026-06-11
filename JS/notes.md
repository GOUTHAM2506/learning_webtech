# Javascript

## What is Javascript?

- `Javascript` is a high-level _programming language_ as well as _scripting language_ which is used to make webpages _dynamic_.

  ### What is scripting language ?

  The scripting language means
  - There will be no complier, javascript code will be executed directly at run-time.

  - It is used to perform automated tasks.

  Ex: Displaying pop up notification on browser

- It is used to add functionalities to the static webpages as well as interaction between User and UI.

- It is one of the language which is understood by the browser and browser natively understands `HTML` and `CSS`

- `Javascript` is used to create server side logic after the introduction of `Node.js`

- We can run the `Javascript` on both side, _Frontend_ as well as _Backend_
  - _Frontend_ - `React.js`, `Angular`, `Vue.js`, `Next.js`

  - _Backend_ - `Node.js`, `Express.js`

- `Javascript` is having a huge eco-system which includes _JS_, _Libraries_ and _Frameworks_

## History of Javascript

- `Javascript` was introduced in the year of _1995_.

- `Javascript` is created within 10 days by Brendan Eich. _(CEO of Brave Browser)_.

- Name Timeline : `Mocha` -> `Livescript` (Sept,1995) -> `Javacript` (Dec, 1995).

## What is ECMA?

- `ECMA` stands for _European Computer Manufacturers Association_.

- `ECMA` is an organisation, which will provide technical standards _(version, specification, rules)_ for `Javascript`

- `ECMAScript` (ES)
  - _ES6_ is a major update in `Javascript` history (2015).

  - Whatever the concepts, introduced in _ES6_ concepts.

  - Every year, in the month of June, `ECMA` will release new version of `Javascript`

## Features or Characteristics of JS

1. Client - Side Scripting Language.

2. Dynamically Typed Programming Language.

3. Weakly Typed Programming Language.

4. Interpreted Programming Language.

5. Single-Threaded Programming Language.

   **_First 5 are very important_**

6. Synchronous in Nature _(Default behaviour of Javascript)_.

7. Asynchronous in Nature _(We can make)_.

8. Object-Based Programming Language.

9. Event-Driven.

10. Run on both sides _(Fronted - Client, Backend - Server)_.

11. Client - Side Validation.

12. Cross-Platform _(Windows, Mac)_.

### 1. Client - Side Scripting Language

- Client = Browser

- Scripting = No compiler

- `Javascript` is run on the user's browser (Chrome, Edge, Safari, Firefox etc).

- Broweser will download the `JS` files to execute.

### 2. Dynamically Typed Programming Language

- There is no need to mention the datatype.

- The datatype will be assigned by the `JS` Engine at the _Runtime_ of `JS` file

_console.log() is the printing statement in Javascript_

### 3. Weakly Typed Programming Language

- The `Javascript` will change the datatype when it is needed (required).

Ex:

```javascript
console.log(5 + "5"); //Output: 55
//Number will be converted into String internally
```

### 4. Interpreted Programming Language

- The _Interpreted Programming Language_ which will read and execute the code without compliation by the interpreter or `JS` Engine.

- Code will execute _line-by-line_ manner.

### 5. Single-Threaded Programming Language

- A Single-Threaded Programming Language means _one task_ at a time.

- Single = One

- Thread = Piece of Code

- Task 1 -> Task 2 -> Task 3

- `Javascript` is a Single-Threaded Programming Language because it is having only one _Call Stack_.

- Inside the _Call Stack_ one task will be executed at a time.

### 6. Synchronous in Nature

- By default, `Javascript` follows Synchronous behaviour.

- _Synchronous_ means the code will be executed in a _sequential way_.

- One line, One task at a time until or unless the execution of the first line will not complete, second line has to wait for execution.

- _Blocking_ in Nature.

```html
<script>
  console.log("Task Started");
  alert("Task Paused");
  // Blocks the execution of next line until and unless you click on the OK
  console.log("Task Ended");
</script>
```

### 7. Aynchronous in Nature

- We can make `Javascript` _Asynchronous_ by using _timing_ functions, _promises_ etc.

- We can perform multiple task at a time even without _blocking_ the code.

- _Non-Blocking_ in Nature.

Ex:

```html
<script>
  console.log("Task Started");
  // Task will be executed in the background without blocking the execution of next lines
  setTimeout(() => {
    alert("Task Paused");
  }, 5000);
  console.log("Task Ended");

  Output :
  Task Started
  Task Ended
  //After 5 secs
  Task Paused
</script>
```

### 8. Object-Based Programming Language

- In `Javascript`, data will be stored in the form of _object_, for memory allocation.

- It is also called has _Object-Based Prototype_

### 9. Event-Driven

- `Javascript` supports multiple types of events such as _mouse events_, _form events_, _keyboard events_ etc.

### 10. Run on both sides _(Fronted - Client, Backend - Server)_

- The `Javascript` will be executed on _Client side_ as well as _Server side_.

### 11. Client - Side Validation

- `Javascript` will validate the data on the browser side itself before sending to the server.

- Ex: **_Form Data_**, if _password_ and _confirmPassword_ it not matching will display on error notification on the browser.

### 12. Cross-Platform _(Windows, Mac)_

- `Javasciprt` will execute on **_Windows_**, **_Mac_**, **_Linux_** and **_Mobile_** Devices

## Ways to add `Javascript`

There are mainly 2 ways to add the `Javascript`

1. Internal JS

2. External JS

### Internal JS

- We can write the `Javascript` code inside a same html file with the help of `<script>` tag.

- We have to add the `<script>` tag at the end of the body tag.

Syntax:

```html
<body>
  <h1>Internal JS</h1>
  <script>
    console.log("Internal Javascript return");
  </script>
</body>
```

### External JS

- We can write down `Javascript` code inside a seperate _`.js`_ file

- We can connect external `Javascript` file to the `HTML` document with the help of `<script src = "">` tag.

Syntax:

```html
<script src="./externaljs.js"></script>
```

#### Note:

Always add the `<script>` tag at the end of the `<body>` tag.

## Environmental Setup for `Node.js`

- `Node.js` => Javascript Runtime Environment

- By default Javascript is run inside browser, if you want to run outside of a browser we have to use `Node.js`

### How to check `Node.js` installed or not? (Version)

1. `node -v`

2. `npm -v`

### Command to run `.js` file in `Node.js` :

_Command :_ node fileName.js

_For Ex:_ node example.js

## Fundamentals of Javascript: (Tokens)

- The smallest unit of a programming language.

- Types :
  1. Keywords

  2. Identifiers

  3. Literals

  4. Operators

  5. Separators

  6. Comments

## Variables

- `Javascript` is a dynamically typed programming language so we don't have to add the datatype.

- There are 3 ways to declare varibale.

1. `var`
   Ex: `var a = 10`

2. `let`
   Ex: `let b = 10`

3. `const`
   Ex: `const c = 10`

### Print statement

- The syntax for printing statement is

```js
console.log();
```

- Here, console is an `object` and log is a `method`.

1. `var`

- In `var`, _re-declaration_ and _re-initialization_ is possible.

Ex:

```js
var a = 10;
console.log(a);
var a = 20;
console.log(a);
/*
Output:
10
20*/
```

2. `let`

- `let` variable doesn't allow _re-declaration_ but _re-initialization_ is possible.

```js
let b = 30;
console.log(b);
b = 40;
console.log(b);
/*
Output:
30
40
*/
```

3. `const`

- `const` variable doesn't allow both _re-declaration_ and _re-initialization_.

```js
const c = 50;
console.log(c);
console.log(c);
/*
Output:
50
50
*/
```

### Initialization

- `var` and `let` allows _re-initialization_ due to that it does allow empty variable and gives output as _undefined_.

- But `const` doesn't

Ex:

```js
var a;
console.log(a);

let b;
console.log(b);

/*
Output:
undefined
undefined
*/
```

## Scope

- The place is where we declare variables.

- There are 3 scopes in `JS`

1. Global Scope

2. Block Scope

3. Function Scope or Local Scope




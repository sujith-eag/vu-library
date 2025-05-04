---
title: "Methods in Objects"
description: ""
summary: ""
date: 2024-11-09T17:06:12+05:30
lastmod: 2024-11-09T17:06:12+05:30
draft: false
weight: 402
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Objects can also have **methods** (functions). When a function is defined as a property of an object, we call that function a **method**.

Defining a method in an object using the `function()` declaration.

```js
let user = {
  name: "John",
  sayHi: function() {
    alert("Hello");
  }
};

user.sayHi(); // Hello
```

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

// Calling the methods
person.bio();  // "Bob Smith is 32 years old."
```

Methods allow objects to "act" in a specific way by performing actions based on the object’s properties or behavior.

____
#### Shorthand Syntax for Methods

Prior to **ES6**, you would define a method in an object literal using a function definition expression, just as you would define any other property of an object:

```javascript
let square = {
  area: function() { return this.side * this.side; },
  side: 10
};

square.area(); // => 100
```

In **ES6**, the object literal syntax was extended to provide a shortcut where the `function` keyword and the colon are omitted. This results in cleaner, more concise code:

```javascript
let square = {
  area() { return this.side * this.side; },
  side: 10
};

square.area(); // => 100
```

Both forms of the code are equivalent. They both add a property named `area` to the object literal and set the value of that property to the specified function. The shorthand syntax makes it clearer that `area()` is a **method** and not a data property like `side`.

**simplified syntax** for functions inside an object:
```js
bio: function () {...},
introduceSelf: function() {...},

// simpler is omitting the function
bio() { ... },
introduceSelf() { ... },
```

___

#### Using String Literals and Computed Property Names

You can also use **string literals** and **computed property names**, which can include **Symbol** property names:

```javascript
const METHOD_NAME = "m";
const symbol = Symbol();

let weirdMethods = {
  "method With Spaces"(x) { return x + 1; },
  [METHOD_NAME](x) { return x + 2; },
  [symbol](x) { return x + 3; }
};

weirdMethods["method With Spaces"](1);  // => 2
weirdMethods[METHOD_NAME](1)  // => 3
weirMethods[symbol](1)       // => 4

```

Using a **Symbol** as me may not seem so strange. In fact, to make an object iterable (so it can be used with a `for/of` loop), you must define a method with the symbolic name `Symbol.iterator`.


___

---
title: "04 - Using 'this' in Object method"
description: ""
summary: ""
date: 2024-11-09T17:07:07+05:30
lastmod: 2024-11-09T17:07:07+05:30
draft: false
weight: 406
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The `this` keyword is commonly used inside methods to refer to the object the method belongs to.  `this` refers to the object that **owns** the method.

In the following example, the `sayHi` method uses `this.name` to access the `name` property of the `user` object:

```js
let user = {
  name: "John",
  sayHi() {
    alert(this.name); // "this" refers to the user object
  }
};

user.sayHi(); // John
```
During execution, the value of `this` will be `user`. `this` refers to the `user` object, and `this.name` accesses the `name` property.

---

### 'this' is Not Bound (Dynamic)

In JavaScript, the value of `this` is **determined at runtime** and depends on how the function is **called**, not where it is declared. 

This means that if `this` is used in a method, its value can change based on the **context** of the call. Using `this`, it allows for same method definition to be used in multiple objects. 

```js
let user = {
  name: "John",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
};

user.introduceSelf(); // "Hi! I'm John"
```

However, if you call the method in a different context, `this` will refer to the new context:
```js
let introduce = user.introduceSelf;

introduce(); // "Hi! I'm undefined" or throws an error in strict mode.
```
In this case, `this` no longer refers to the `user` object because the function `introduce` was called without an object context.

---

### 'this' in Constructors

You can use `this` to create methods inside a constructor function, which allows for **object reuse** across multiple instances:

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}`);
  };
}

let person1 = new Person("Chris");
let person2 = new Person("Deepthi");

person1.introduceSelf(); // "Hi! I'm Chris"
person2.introduceSelf(); // "Hi! I'm Deepthi"
```

In this case, `this.name` and `this.introduceSelf` work because `this` refers to each specific instance of `Person`.

---

### **Arrow Functions and `this`**

Unlike regular functions, **arrow functions** do not have their own `this`. They inherit `this` from the surrounding context (lexical scoping). This can lead to unexpected behavior when used in methods.

```js
let user = {
  name: "John",
  sayHi: () => {
    alert(this.name); // `this` is not bound to user, it's inherited from the surrounding scope
  }
};

user.sayHi(); // undefined (or error in strict mode)
```

In the example above, `this` in the arrow function is inherited from the global context (or undefined in strict mode), not from the `user` object.

---

### **A Simple Calculator Object**

Using methods and `this` to create a simple calculator object with `read()`, `sum()`, and `multiply()` methods:

```js
let calculator = {
  read() {
    this.a = +prompt('Give a?', 0);
    this.b = +prompt('Give b?', 0);
  },
  sum() {
    return this.a + this.b;
  },
  multiply() {
    return this.a * this.b;
  }
};

calculator.read(); // Prompt the user for inputs
alert(calculator.sum()); // Show the sum
alert(calculator.multiply()); // Show the product
```

---

### **Method Chaining**

JavaScript allows for **method chaining**, where multiple method calls are linked together in a single line. For this to work, each method must return the object itself (`this`), so the next method can be called on it.

Here's an example using an object that represents a ladder:

```js
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // Return the object to enable chaining
  },
  down() {
    this.step--;
    return this; // Return the object to enable chaining
  },
  showStep() {
    alert(this.step);
    return this; // Return the object to enable chaining
  }
};

// Chaining method calls
ladder.up().up().down().showStep().down(); // step = 1
```

In the example:
- `ladder.up()` increments the `step`.
- `ladder.down()` decrements the `step`.
- `ladder.showStep()` displays the current `step`.
- By returning `this` from each method, you can chain calls together.

---

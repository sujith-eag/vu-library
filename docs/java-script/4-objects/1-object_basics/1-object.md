---
title: "01 - Methods for Creating Objects"
description: ""
summary: ""
date: 2024-11-09T17:05:46+05:30
lastmod: 2024-11-09T17:05:46+05:30
draft: false
weight: 382
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



**Primitive Types** can hold only a single value (e.g., numbers, strings, booleans).

**Object Types** are collections of key-value pairs and can store multiple values. Objects are JavaScript’s most fundamental data type and play a crucial role in the JavaScript language. 

They are composite values that aggregate multiple values (primitive values or other objects) and allow you to store and retrieve those values by name.

An object is an unordered collection of properties, each of which has a name and a value. Property names are usually strings (although they can also be Symbols), so you can think of objects as mapping strings to values.

An object is more than just a simple string-to-value map. In addition to maintaining its own set of properties, a JavaScript object also inherits the properties of another object, known as its "prototype." The methods of an object are typically inherited properties, and this concept of “prototypal inheritance” is a key feature of JavaScript.

### What is an Object?

Any value in JavaScript that is not a string, a number, a Symbol, or a boolean (`true`, `false`), `null`, or `undefined` is an object. While strings, numbers, and booleans are not objects, they can behave like immutable objects.


Some of the most common operations with objects are: **Creating** objects, **Setting**, **querying**, **deleting**, **testing**, and **enumerating** their properties.

_______

### Object Properties

Object property has a name and a value. 
* A property name may be any string (including an empty string or any Symbol), but no object may have two properties with the same name. 
* The value may be any JavaScript value or it may be a getter or setter function (or both).

In addition to its name and value, each property has three attributes:

- **Writable**: Specifies whether the value of the property can be set.
- **Enumerable**: Specifies whether the property name is returned in a `for/in` loop.
- **Configurable**: Specifies whether the property can be deleted and whether its attributes can be altered.

By default, all properties of the objects you create are writable, enumerable, and configurable but, Many of JavaScript’s built-in objects have properties that are read-only, non-enumerable, or non-configurable. 

---

### Creating Objects

Objects can be created in 3 ways, using object literals, the `new` keyword, or the `Object.create()` function.

#### 1. Object Literals

The easiest way to create an object is using an object literal. In its simplest form, an object literal is a comma-separated list of colon-separated `name:value` pairs enclosed in curly braces `{}`.

```js
let user = { key: value };
```

A property name is either a JavaScript identifier or a string literal (including the empty string). A property value can be any JavaScript expression, and its result (whether a primitive value or an object) becomes the property value.

An **object literal** is shorthand for creating objects by defining key-value pairs inside `{}`. Each property has a **key** or **name** before the colon (`:`) and is separated by a comma.

```js
let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; // Two numeric properties
let p2 = { x: point.x, y: point.y + 1 }; // More complex values
```

**Example with a more complex object:**

```js
let book = {
  "main title": "JavaScript", // These property names include spaces
  "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
  for: "all audiences", // 'for' is reserved, but no quotes needed
  author: {
    firstname: "David",
    surname: "Flanagan"
  }
};
```

Example of interacting with object properties:

```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true,  // Property name with spaces must be in quotes
};

alert(user.name);  // "John"
user.isAdmin = true;  // Assigning a new property
delete user.age;  // Deletes the 'age' property
```

**Note**: Property names can be any string, number, or symbol, including reserved words or multi-word names. Properties with invalid binding names or multi-word names need to be quoted (e.g., `"touch wood": "touched"`).

---

#### 2. Creating Objects with new

The new operator creates and initializes a new object. The new keyword must be followed by a function invocation. A function used in this way is called a constructor and serves to initialize a newly created object. JavaScript includes constructors for its built-in types. For example:
```js
// Create an empty object: same as {}.
let o = new Object(); 

// Create an empty array: same as [].
let a = new Array();

// Create a Date object representing the current time
let d = new Date();

// Create a Map object for key/value mapping
let r = new Map();
```

In addition to these built-in constructors, it is common to define your own constructor functions to initialize newly created objects which is covered later.


____


### Prototypes in JavaScript

Almost every JavaScript object has another JavaScript object associated with it, known as its **prototype**. The first object inherits properties from its prototype.

- The object created by `new Object()` inherits from `Object.prototype`.
- Similarly, the object created by `{}` also inherits from `Object.prototype`.
- The object created by `new Array()` uses `Array.prototype` as its prototype.
- The object created by `new Date()` uses `Date.prototype` as its prototype.

This concept can be confusing when first learning JavaScript. Remember: **almost all objects have a prototype**, but only a relatively small number of objects have a **prototype property**. These objects, which contain the `prototype` property, define the prototypes for other objects.

---

### 3. Object.create()

`Object.create()` is the third way to create an object in JavaScript. It creates a new object, using the first argument as the **prototype** of that object.

```js
let o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x and y
console.log(o1.x + o1.y);  // 3
```

#### Creating an Ordinary Empty Object

If you want to create an empty object like the one returned by `{}` or `new Object()`, pass `Object.prototype` as the argument:

```js
let o3 = Object.create(Object.prototype); 
// o3 is like {} or new Object()
```


**Creating an Object Without a Prototype:** You can also pass `null` to create a new object that does not inherit from anything, not even basic methods like `toString()`:

```js
let o2 = Object.create(null);
// o2 inherits no properties or methods
```

`Object.create()` can take an optional **second argument** that specifies the properties of the new object. This is an advanced feature that we will cover later.

---

##### Use Case: Guarding Against Unintended Modifications

One common use for `Object.create()` is when you want to protect an object from unintended modifications by a library function that you don't control. Instead of passing the object directly to the function, you can pass an object that **inherits** from it. This way, if the function reads properties of the object, it will see the inherited values. If it sets properties, however, those writes will not affect the original object.

```js
let o = { x: "don't change this value" };
library.function(Object.create(o)); // Guard against accidental modifications
```

In this case, the `library.function` can safely interact with the object, but any changes to properties will not affect the original `o` object.

---



### Extended Object Literal Syntax

Recent versions of JavaScript have extended object literal syntax in several useful ways.

#### 1. Shorthand Properties

If you have values stored in **variables** and want to create an object with **properties** named after those variables, you can use shorthand syntax introduced in ES6:

```js
let x = 1, y = 2;
let o = { x, y };
o.x + o.y // => 3
```

Without shorthand, you would have to write repeatedly:

```js
let x = 1, y = 2;
let o = {
  x: x,
  y: y
};
```

```js
function makeUser(name, age) {
  return {
    name,  // shorthand for name: name
    age,   // shorthand for age: age
  };
}

let user = makeUser("John", 30);
alert(user.name);  // "John"
```

#### 2. Computed Property Names

Sometimes you need to create an object with a specific property, but the name of that property is dynamic (not a constant at compile-time). Instead of manually adding properties after object creation, ES6 allows you to use computed property names:

```js
const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;
```

With ES6, you can directly use computed properties in the object literal syntax:

```js
const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let p = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2
};

console.log(p.p1 + p.p2); // => 3
```

In this syntax, the square brackets indicate an arbitrary JavaScript expression, which will be evaluated, and the resulting value (converted to a string if necessary) will be used as the property name.

Using square brackets `[]` inside object literals to **dynamically set property names**. This feature is known as _computed properties_.

```js
let fruit = "apple";
let bag = {
  [fruit + 'Computers']: 5  // property name is "appleComputers"
};

console.log(bag.appleComputers);  // 5
```

---

**Dynamically Setting Property Names**

```js
let fruit = prompt("Which fruit to buy?", "apple");  // User input with default value "apple"
let bag = {
  [fruit]: 5,  
  // Property name istaken from `fruit` variable
};

alert(bag.apple);  
// If the user chooses "apple", this alerts "5"

// { apple: 5 }
```

This approach works the same as the following code:

```js
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

bag[fruit] = 5;  // Property name taken from `fruit` variable
```

Both methods allow you to dynamically create property names in an object based on variables or expressions.


_____

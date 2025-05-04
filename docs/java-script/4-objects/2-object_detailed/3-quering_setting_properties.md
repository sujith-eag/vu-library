---
title: "03 - Copying, Extending and Serializing Objects"
description: ""
summary: ""
date: 2024-11-09T17:06:36+05:30
lastmod: 2024-11-09T17:06:36+05:30
draft: false
weight: 404
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


When objects are copied, only **primitive values** are copied by value, while **objects** inside the object are still copied by reference. This is a **shallow copy** of the object.

```js
let user = { name: "John", age: 30 };
let copy = {};

// Copying properties of 'user' into 'copy'
for (let prop in user) {
	copy[prop] = user[prop];
}

copy.name = "Pete";  // Changing copy does not affect user
console.log(user.name);  // "John"
```


### Extending Objects

A common operation in JavaScript is copying the properties of one object to another object. This can be done easily with code like this:

```javascript
let target = {x: 1}, source = {y: 2, z: 3};
for (let key of Object.keys(source)) {
  target[key] = source[key];
}
target // => {x: 1, y: 2, z: 3}
```

In ES6, this ability is included in the core JavaScript language through the `Object.assign()` method.

____

#### Object.assign()

`Object.assign()` expects two or more objects as its arguments. It modifies and returns the first argument (the target object) but does not alter the second or any subsequent arguments (the source objects).

One common reason to assign properties from one object to another is when you have an object that defines default values for many properties. If you want to copy those default properties into another object **only if a property by that name does not already exist** in the target object, you can use `Object.assign()`. However, using it naively will overwrite everything in the target object:

```javascript
Object.assign(o, defaults);
// This overwrites everything in o with defaults
```

Instead, to avoid overwriting existing properties, you can create a new object, copy the defaults into it, and then override those defaults with the properties from `o`:

```javascript
o = Object.assign({}, defaults, o);
```

____

`Object.assign()` performs a **shallow copy**. This means it copies the top-level properties, but nested objects are copied by reference.
```js
Object.assign(dest, ...sources)
```

  ```js
  let user = { name: "John" };
  let permit1 = { canView: true };
  let permit2 = { canEdit: true };

  // Merging multiple objects into one
  Object.assign(user, permit1, permit2);
  
  console.log(user.name);    // "John"
  console.log(user.canView); // true
  console.log(user.canEdit); // true
  ```


---

### Spread Operator

You can express the object copy-and-override operation using the **spread operator** (`...`):

```javascript
o = { ...defaults, ...o };
```

In **ES2018** and later, you can copy the properties of an existing object into a new object using the spread operator inside an object literal: It also does a shallow copy.

```javascript
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };

let rect = { ...position, ...dimensions };

rect.x + rect.y + rect.width + rect.height // => 175
```

In this code, the properties of the `position` and `dimensions` objects are "spread out" into the `rect` object literal, as if they had been written literally inside the curly braces.

**Note:** The spread operator is not a JavaScript operator. It is a special-case syntax available only within object literals.

##### Property Overriding with the Spread Operator

If the object being spread and the object into which it is being spread both have a property with the same name, the value of that property will be the one that comes last:

```javascript
let o = { x: 1 };
let p = { x: 0, ...o };
p.x
// => 1: The value from object `o` overrides the initial value

let q = { ...o, x: 2 };
q.x
// => 2: The value `2` overrides the previous value from `o`
```

##### Only Own Properties Are Spread

Note that the spread operator only spreads the **own properties** of an object, not any inherited properties:

```javascript
let o = Object.create({ x: 1 }); // `o` inherits the property `x`
let p = { ...o };
p.x
// => undefined: `x` is not an own property of `o`
```

___

#### Custom merge Function

If you want to avoid the overhead of extra object creation and copying, you can write a version of `Object.assign()` that copies properties only if they are missing from the target object. This function doesn't override existing properties and doesn't handle `Symbol` properties:

```javascript
// Like Object.assign() but doesn't override existing properties
// (and also doesn't handle Symbol properties)
function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) { // This is different from Object.assign()
        target[key] = source[key];
      }
    }
  }
  return target;
}
```

```javascript
Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, z: 4});
// => {x: 2, y: 3, z: 4}

merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4});
// => {x: 1, y: 2, z: 4}
```

This approach is straightforward, and you can write other property manipulation utilities like this `merge()` function.

---


### Serializing Objects

Object serialization is the process of converting an object’s state into a string so that it can later be restored. The functions `JSON.stringify()` and `JSON.parse()` are used to serialize and restore JavaScript objects.

```javascript
let o = {x: 1, y: {z: [false, null, ""]]}}; // Define a test object
let s = JSON.stringify(o);
// s == '{"x":1,"y":{"z":[false,null,""]}}'

let p = JSON.parse(s);
// p == {x: 1, y: {z: [false, null, ""]}}}
```

These functions use the **JSON** data interchange format. **JSON** stands for “JavaScript Object Notation,” and its syntax is very similar to that of JavaScript object and array literals.

#### JSON Syntax

JSON syntax is a subset of JavaScript syntax, and it cannot represent all JavaScript values. The following data types are supported and can be serialized and restored:

- Objects
- Arrays
- Strings
- Finite numbers
- `true`, `false`, and `null`

However, the following values cannot be properly serialized or restored:

- **NaN**, **Infinity**, and **-Infinity** are serialized to `null`.
- **Date objects** are serialized to ISO-formatted date strings (via the `Date.toJSON()` function), but `JSON.parse()` leaves these as strings and does not restore them as `Date` objects.
- **Function**, **RegExp**, and **Error** objects, as well as the `undefined` value, cannot be serialized or restored.

#### Customizing Serialization and Restoration

Both `JSON.stringify()` and `JSON.parse()` accept optional second arguments that can be used to customize the serialization and/or restoration process. This allows you to specify a list of properties to be serialized.

---



### Deep Cloning Object (Nested Objects)

**Deep cloning** is needed when an object contains other objects. A shallow copy will only copy references to nested objects, not the actual content.

To make a true **deep copy**, we must copy nested objects properly. The `structuredClone()` method performs **deep cloning** of objects, copying both the object and its nested properties.

```javascript
let user = {
  name: "John",
  age: 30,
  sizes: {
	height: 182,
	width: 50
  }
};

let clone = structuredClone(user);

console.log(user.sizes == clone.sizes); // false (they are different objects)

user.sizes.width = 60;

console.log(clone.sizes.width); // 50 (clone is unaffected)
```

`structuredClone()` handles more than just objects. It can clone most data types, including arrays, primitive values, and supports **circular references** (where an object refers to itself).

**Example with Circular References**:

```javascript
let user = {};
user.me = user;  // Circular reference

let clone = structuredClone(user);

console.log(clone.me === clone); // true (clone maintains circular reference)
```

**Limitations**: `structuredClone()` **cannot** clone objects with functions, such as methods.

```javascript
structuredClone({ f: function(){} }); // Error
```

____


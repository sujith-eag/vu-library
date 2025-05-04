---
title: "Basic Characteristics of Objects"
description: ""
summary: ""
date: 2024-11-09T17:06:12+05:30
lastmod: 2024-11-09T17:06:12+05:30
draft: false
weight: 384
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



When defining objects, they hold **references** to the data, not copies. This means multiple variables can reference the same object. In contrast, when a primitive variable is defined, it contains a copy of the value provided to it.

Objects are sometimes called **reference types** to distinguish them from JavaScript’s primitive types. Using this terminology, object values are references, and we say that objects are compared by reference: two object values are the same if and only if they refer to the same underlying object.

When an object is assigned to a variable, it doesn't hold the object itself but the memory address / reference of the object. 

**Example of Object References**

```js
let object1 = { value: 10 };
let object2 = { value: 10 };
let object3 = object1;  // object3 references object1

console.log(object1 == object2);  // false (different objects, same structure)
console.log(object1 == object3);  // true (same object)
```

```javascript
const obj = { data: 42 };
const objCopy = obj;  // objCopy points to the same object as obj

objCopy.data = 43;

console.log(obj);      // { data: 43 }
console.log(objCopy);  // { data: 43 }
```

In this example, both `obj` and `objCopy` point to the same object, so changing `objCopy.data` also changes `obj.data`.

### **Working with DOM References**

This is how the DOM object gets edited by storing its reference in a JavaScript variable:

```javascript
const element = document.querySelector("#container");

element.style.backgroundColor = 'red';  // Changes the actual DOM element
```

---

#### **Objects Are Not Compared by Value**

Objects are not compared by value. This means two distinct objects are not equal even if they have the same properties and values. The same applies to arrays—two distinct arrays are not equal even if they have the same elements in the same order:

**Example of Object and Array Comparison**
```javascript
let m = { x: 1 }, n = { x: 1 };
console.log(m === n);  // false

let a = [], b = [];
console.log(a === b);  // false
```

Even though `m` and `n` both have the same structure and property values, they are different objects, so `m === n` is `false`. Similarly, `a` and `b` are two distinct arrays, so `a === b` is also `false`.

---

### **Mutability of Objects**

Objects are **mutable**, meaning their values can be changed after they are created.

**Example of Object Mutation**
```javascript
let object1 = { value: 10 };
object1.value = 15;  // Modify the existing value
console.log(object1); // { value: 15 }
```

_____

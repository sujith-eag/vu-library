---
title: "05 - Object.key Method"
description: ""
summary: ""
date: 2024-11-09T17:07:30+05:30
lastmod: 2024-11-09T17:07:30+05:30
draft: false
weight: 390
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


`Object.keys(obj)` is a method that returns an **array** of the **own enumerable property names (keys)** of an object `obj`. This means it will list all the keys in the object, excluding any keys in the object's prototype chain.
  
```js
let obj = { "a": 1, "b": 2 };

console.log( Object.keys(obj) );  // ["a", "b"]
```
The object `obj` has two keys: `"a"` and `"b"`. The `Object.keys(obj)` method returns an array of those keys.

The `.length` property of the array returned by `Object.keys(obj)` gives the number of keys (properties) in the object. If the object has no properties, the length will be `0`.

```js
let emptyObj = {};

console.log(Object.keys(emptyObj).length);  // 0
```

```js
if ( !Object.keys(obj).length ) 
	return null;
```

---

### Example Use Case:

This pattern is commonly used in scenarios where you need to create or process elements based on the properties of an object. For example, if you're creating a DOM tree from an object and encounter an empty object, you might want to avoid creating any unnecessary DOM nodes.

```js
function createTree(obj) {
  // Check if the object is empty
  if (!Object.keys(obj).length) return null; // Return early if object has no properties
  
  let tree = document.createElement("ul");

  // Create list items for each property
  for (let key in obj) {
    let item = document.createElement("li");
    item.textContent = key;
    tree.appendChild(item);
  }

  return tree;
}
```

In this example, if the `obj` passed to `createTree()` is empty, `Object.keys(obj).length` will be `0`, and the function will return `null`, avoiding any DOM manipulation.

[[2.2 modifying Practice#Create a tree from object|Question that uses this]]


---

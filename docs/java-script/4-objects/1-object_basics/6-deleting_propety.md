---
title: "06 - Testing and Deleting Properties"
description: ""
summary: ""
date: 2024-11-09T17:07:54+05:30
lastmod: 2024-11-09T17:07:54+05:30
draft: false
weight: 392
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### Deleting Properties

The `delete` operator removes a specified property from an object. Its single operand should be a property access expression.

delete does not operate on the value of the property but on the property itself:
```js
delete book.author; 
// The book object now has no author property.

delete book["main title"];  
// Now it doesn't have "main title", either.
```

```js
delete day1.squirrel;

console.log(day1.squirrel);  // undefined
```

The delete operator only deletes own properties, not inherited ones. To delete an
inherited property, you must delete it from the prototype object in which it is defined.
Doing this affects every object that inherits from that prototype.

---

### Testing Properties

To test for membership in a set — to check whether an object has a property with a given name — you can use the `in` operator, the `hasOwnProperty()` method, the `propertyIsEnumerable()` method, or simply query the property directly.

#### The 'in' Operator

The `in` operator expects a property name on its left side and an object on its right. It returns `true` if the object has an own property or an inherited property with that name:

```javascript
let o = { x: 1 };

"x" in o
// => true: o has an own property "x"

"y" in o
// => false: o doesn't have a property "y"

"toString" in o
// => true: o inherits a toString property
```

Instead of using the `in` operator, it is often sufficient to simply query the property and use `!==` to make sure it is not `undefined`:

```javascript
let o = { x: 1 };

o.x !== undefined
// => true: o has a property "x"

o.y !== undefined
// => false: o doesn't have a property "y"

o.toString !== undefined
// => true: o inherits a toString property
```

#### The Difference Between 'in' and Direct Property Access

There is one thing the `in` operator can do that the simple property access technique cannot: `in` can distinguish between properties that do not exist and properties that exist but have been set to `undefined`.

```javascript
let o = { x: undefined };

o.x !== undefined  // => false: property exists but is undefined
o.y !== undefined  // => false: property doesn't exist

"x" in o          // => true: the property exists, even though it's undefined
"y" in o          // => false: the property doesn't exist

delete o.x;
"x" in o          // => false: the property doesn't exist anymore
```

#### The 'hasOwnProperty()' Method

The `hasOwnProperty()` method of an object tests whether that object has an own property with the given name. It returns `false` for inherited properties:

```javascript
let o = { x: 1 };

o.hasOwnProperty("x")
// => true: o has an own property "x"

o.hasOwnProperty("y")
// => false: o doesn't have a property "y"

o.hasOwnProperty("toString")
// => false: "toString" is an inherited property
```

#### The 'propertyIsEnumerable()' Method

The `propertyIsEnumerable()` method refines the `hasOwnProperty()` test. It returns `true` only if the named property is an own property and its enumerable attribute is `true`:

```javascript
let o = { x: 1 };

o.propertyIsEnumerable("x")
// => true: o has an own enumerable property "x"

o.propertyIsEnumerable("toString")
// => false: "toString" is not an own property

Object.prototype.propertyIsEnumerable("toString")
// => false: "toString" is not enumerable
```

____

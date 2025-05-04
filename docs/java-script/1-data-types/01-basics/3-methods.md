---
title: "04 - Methods"
description: ""
summary: ""
date: 2024-11-07T14:43:05+05:30
lastmod: 2024-11-07T14:43:05+05:30
draft: false
weight: 308
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## Methods of Primitives

JavaScript supports an object-oriented programming style. This means that rather than having globally defined functions to operate on values of various types, the types themselves define methods for working with values.

To sort the elements of an array `a`, we don’t pass `a` to a `sort()` function. Instead, we invoke the `sort()` method of `a`:

```js
a.sort();
// The object-oriented version of sort(a).
```

Technically, it is only JavaScript objects that have methods. Numbers, strings, booleans, and symbol values behave as if they have methods. In JavaScript, `null` and `undefined` are the only values that methods cannot be invoked on.

While primitives (like strings, numbers, booleans) are not objects by themselves, JavaScript allows them to **behave like objects** in certain situations. This is done through **"wrapper objects"** that temporarily convert the primitive to an object for method access.

When you call a method on a primitive value, JavaScript **wraps** the primitive in an appropriate **object wrapper** (e.g., `String`, `Number`, `Boolean`, `Symbol`, or `BigInt`). After the method call, the wrapper is discarded.

```js
let str = "hello";
console.log(str.toUpperCase());  // "HELLO"
```

- `str` is a primitive string.
- JavaScript temporarily wraps it in a `String` object to call the `toUpperCase` method, and then the wrapper is discarded. So primitives can provide methods yet still remain lightweight.

### Wrappers for Each Primitive Type:

- **String** has methods like `.toUpperCase()`, `.toLowerCase()`, etc.
- **Number** has methods like `.toFixed()`, `.toPrecision()`, etc.
- **Boolean** has methods like `.toString()` to convert it into a string.

However, **`null`** and **`undefined`** do not have object wrappers, so they **cannot** be used with methods.

#### Converting Primitive Types:

```js
let num = Number("123"); // Converts the string "123" into a number
let booleanVal = Boolean(0); // Converts 0 to false
```

**Note**: `null` and `undefined` do not have methods because they are **the most primitive types** and do not have associated object wrappers.

---

- **Primitive types**: Single values, immutable, include `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- **Reference types**: Store collections of data and more complex entities, include `object`, `array`, `function`, etc.
- **`typeof` operator**: Used to check the type of a value.
- **Wrapper objects**: Allow primitives to behave like objects when methods are invoked on them (e.g., `String`, `Number`, `Boolean`).

---

### Empty Values

- **`null`** is used to assign an `empty`, `nothing`, or `unknown` value to a variable.
- **`undefined`** means the `value is not assigned`. It is the default initial value when a variable is declared but the value is not assigned.

Many operations yield `undefined` when they don't produce a meaningful value.

`null` and `undefined` are used to denote the absence of a meaningful value or when the value is unknown. These two are values but carry no information. Both are mostly interchangeable.

---

---
title: "06 - Array-like Objects"
description: ""
summary: ""
date: 2024-11-09T17:09:53+05:30
lastmod: 2024-11-09T17:09:53+05:30
draft: false
weight: 430
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



An **array-like object** is an object that has indexed properties (such as `0`, `1`, etc.) and a `length` property, but it lacks the built-in methods of arrays (like `.push()`, `.pop()`, etc.). These objects are **not** true arrays but are structured similarly.

```js
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

console.log(arrayLike[0]);  // Outputs: Hello
console.log(arrayLike[1]);  // Outputs: World
```

Although `arrayLike` looks like an array (because it has a `length` and indexed properties), it’s not a real array. Therefore, you can't call array methods like `.pop()` or `.push()` on it directly.

**Creating and Iterating Through an Array-like Object:**

```js
let a = {};
// Start with a regular empty object
// Add properties to make it "array-like"
let i = 0;
while(i < 10) {
	a[i] = i * i;
	i++;
}
a.length = i;

// Now iterate through it as if it were a real array
let total = 0;
for (let j = 0; j < a.length; j++) {
	total += a[j];
}
```

---

### Array-like Objects in Client-Side JavaScript

In client-side JavaScript, some methods (such as `document.querySelectorAll()`) return array-like objects. 

**Function to Test for Array-like Objects:**

```js
// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType !== 3 test.

function isArrayLike(o) {
  if (o &&
    // o is not null, undefined, etc.
    typeof o === "object" &&
    // o is an object
    Number.isFinite(o.length) &&
    // o.length is a finite number
    o.length >= 0 && 
    // o.length is non-negative
    Number.isInteger(o.length) &&
    // o.length is an integer
    o.length < 4294967295) { 
    // o.length < 2^32 - 1
    return true;
    // Then o is array-like.
  } else {
    return false;
    // Otherwise it is not.
  }
}
```

---

## Strings as Arrays

JavaScript strings behave like **read-only arrays** of UTF-16 Unicode characters. Instead of using the `charAt()` method to access individual characters, you can use square brackets.

```js
let s = "test";
s.charAt(0)  // => "t"
s[1]         // => "e"
```

Even though strings are treated as array-like, the `typeof` operator still returns "string" for strings. Also, the `Array.isArray()` method will return `false` if you pass it a string.

#### Strings Are Iterable:

A string is considered **array-like**, as it has an index and a `length` property. Moreover, it is iterable, meaning you can use a `for..of` loop to iterate over each character.

```js
for (let char of "test") {
  console.log(char);  // Outputs: t, e, s, t
}
```

---

## Unicode and Surrogate Pairs

JavaScript strings are **Unicode-compliant**, meaning they support **surrogate pairs** (characters that require more than one code unit to represent in UTF-16). The `for..of` loop correctly handles these surrogate pairs, unlike traditional array-like indexing.

```js
let emoji = "😊";
for (let char of emoji) {
  console.log(char);  // Outputs: 😊
}
```

In this case, the `for..of` loop properly handles the emoji as a single character, even though it might require multiple code units internally.

---

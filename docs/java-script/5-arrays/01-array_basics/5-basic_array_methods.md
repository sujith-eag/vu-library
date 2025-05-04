---
title: "05 - Basic Array Methods"
description: ""
summary: ""
date: 2024-11-09T17:09:41+05:30
lastmod: 2024-11-09T17:09:41+05:30
draft: false
weight: 428
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




Properties that contain functions are called **methods** of the value they belong to. For example, `.toUpperCase()` is a method of a string.

---

### arr.at(pos)

The `at()` method returns an indexed element from an array. It is similar to using `[]`, but `[]` does not support accessing the last index using `[-1]`. This is because `[]` is used for both arrays and objects, and `obj[-1]` refers to the key `-1`, not the last property of the object. The `at()` method was introduced to solve this issue.

```js
const fruits = ["Banana", "Orange", "Mango"];

let fruit = fruits.at(2);  // Mango
let fruit = fruits[2];     // Mango

alert(fruits[-1]);         // Error
alert(fruits.at(-1));      // Mango
```

---

### str.split(delim)

The `split()` method splits a string into an array using the specified delimiter `delim`. F

To split a comma-delimited string:

```js
let names = `John, Pete, Mary`;

let arr = names.split(', ');

for (let name of arr) {
	alert(`A message to ${name}.`);
}
```

The `split()` method has an optional second argument: a numeric value that limits the length of the resulting array. If provided, extra elements are ignored.

**Split into letters:**
```js
let str = 'test';
alert(str.split(''));  
// ["t", "e", "s", "t"]
```

---

### arr.reverse()

The `reverse()` method reverses the order of elements in an array and returns the modified array.

```js
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert(arr);  
// [5, 4, 3, 2, 1]
```

---

## Array to String Conversion

If you need to save the contents of an array in textual form for later reuse, it's better to serialize the array using `JSON.stringify()` rather than using other methods like `join()` or `toString()`.

---

### arr.join(glue)

The `join()` method is the reverse of `split()`. It converts an array into a string, concatenating the elements with the specified separator `glue`.

```js
const arr = ["Banana", "Orange", "Mango"];

let str = arr.join(" * ");  // "Banana * Orange * Mango"
let str = arr.join(';');    // "Banana;Orange;Mango"
alert(str);                 // "Banana;Orange;Mango"
```

```js
let a = [1, 2, 3];
alert(a.join());    // "1,2,3"
alert(a.join(" ")); // "1 2 3"
alert(a.join(""));  // "123"

let b = new Array(10);
alert(b.join("-")); // "--------" (a string of 9 hyphens)
```

---

### toString()

The `toString()` method is available to all JavaScript objects, including arrays. It converts an array into a string of comma-separated values. This is the default behavior when an array is output.

```js
const fruits = ["Banana", "Orange", "Mango"];

alert(fruits.toString());  // "Banana,Orange,Mango"
alert(fruits);             // "Banana,Orange,Mango" (same as above)
```
For an array, this works like `join` with no arguments
```js
[1, 2, 3].toString();       // "1,2,3"
["a", "b", "c"].toString(); // "a,b,c"
[1, [2, "c"]].toString();   // "1,2,c"
```

---


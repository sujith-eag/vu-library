---
title: "07 - Array Manipulation Methods"
description: ""
summary: ""
date: 2024-11-09T17:09:53+05:30
lastmod: 2024-11-09T17:09:53+05:30
draft: false
weight: 446
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



This section covers methods for extracting, replacing, filling, and copying slices of arrays.

- **`slice()`**: Returns a shallow copy of a portion of the array, specified by `start` and `end` indices, without modifying the original array.

- **`copyWithin()`**: Copies a part of the array to another position within the same array, overwriting the original values, without changing the array's length.

- **`fill()`**: Fills all or part of the array with a specified value, starting from a `start` index to an `end` index, modifying the array in place.    

---

### slice()

The `slice()` method returns a **shallow copy** (subarray) of a portion of the specified array. It does not modify the original array.

```js
arr.slice([start], [end])
```

- Returns a new array containing elements from `start` to `end` (excluding `end`).
- Does **not** modify the original array.
- Both `start` and `end` can be negative, which counts from the end of the array.
- If only `start` is provided, the slice includes all elements from `start` to the end.

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// Copy from index 1 up to index 3 (index 3 is excluded)
const citrus = fruits.slice(1, 3);   // ["Orange", "Lemon"]

// Copy from index 2 till the end
const citrus2 = fruits.slice(2);     // ["Lemon", "Apple", "Mango"]
```

```js
// Copy from index 2 up to index 4 (index 4 is excluded)
console.log([0, 1, 2, 3, 4].slice(2, 4));   // [2, 3]

// Copy from index 2 till the end
console.log([0, 1, 2, 3, 4].slice(2));  // [2, 3, 4]

// Copy from -2 (from the end) till the end
console.log(["t", "e", "s", "t"].slice(-2));   // ["s", "t"]

// Copy from index 1 to index 3
console.log(["t", "e", "s", "t"].slice(1, 3));  // ["e", "s"]
```

---

### copyWithin()

The `copyWithin()` method copies a **shallow** part of the array to another position within the same array, **overwriting** the original values.

```js
arr.copyWithin(target, start, end)
```

- **Modifies** the array in place.
- Copies elements from position `start` to `end` and places them at position `target`.
- Cannot add any elements so Does not change the length of the array.
- You can use negative indices to count from the end of the array.

```js
const fruits = ["Banana", "Orange", "Mango", "Kiwi"];

// Copy elements from index 0 to 2 and place them at index 2
fruits.copyWithin(2, 0);   // ["Banana", "Orange", "Banana", "Orange"]

// Copy elements from index 0 to 2 and place them at index 2
fruits.copyWithin(2, 0, 2); // ["Banana", "Orange", "Banana", "Orange"]
```

```js
let a = [1, 2, 3, 4, 5];

a.copyWithin(1); 
// [1, 1, 2, 3, 4]

a.copyWithin(2, 3, 5); 
// [1, 1, 3, 4, 4]

(a.copyWithin(0, -2); 
// [4, 4, 3, 4, 4]
```

The first argument specifies the **destination index** to which the first element will be copied.

The second argument specifies the **index of the first element** to be copied. If this argument is omitted, `0` is used by default.

The third argument specifies the **end index** of the slice of elements to be copied. If omitted, the array's length is used.

- Elements from the **start index** up to, but **not including**, the **end index** will be copied.
- You can specify indexes relative to the **end of the array** by passing **negative numbers**, just as you can with `slice()`.

[arr.copyWithin(target, start, end)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

---

### fill()

The `fill()` method fills all the elements in an array (or a slice) with a specified value, starting from a given index and ending at another index.

```js
arr.fill(value, start, end)
```

- Modifies the array in place.
- Fills the array with the specified `value` from `start` index to `end` index.
- You can specify negative indices for both `start` and `end`.

```js
let a = new Array(5);
a.fill(0);         
// [0, 0, 0, 0, 0] (fill with zeros)

a.fill(9, 1);      
// [0, 9, 9, 9, 9] (fill with 9 starting from index 1)

a.fill(8, 2, -1);  
// [0, 9, 8, 8, 9] (fill with 8 from index 2 to the second last element)
```

- The first argument (`value`) is the value to fill the array with.
- The second argument (`start`) is the index to start filling from (defaults to `0`).
- The third argument (`end`) is the index up to which the array is filled (defaults to the array's length).

---

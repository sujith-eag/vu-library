---
title: "09 - Array Combining Methods"
description: ""
summary: ""
date: 2024-11-09T17:09:53+05:30
lastmod: 2024-11-09T17:09:53+05:30
draft: false
weight: 450
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Short summary of methods covered:

1. **`concat()`**: Merges multiple arrays or values into a new array without modifying the original one.

2. **`flat()`**: Flattens a multidimensional array to a specified depth and returns a new array.

3. **`flatMap()`**:  Maps each element using a provided function, then flattens the result into a new array.

___

### Array.prototype.concat()

The `concat()` method creates a new array by merging multiple arrays or values without changing the old ones.

```js
arr.concat(arg1, arg2, ...);
```

- **arg1, arg2, ...**: Accepts any number of Arrays or values to merge with the current array.

```js
let a = [1, 2, 3];
a.concat(4, 5);
// Result: [1, 2, 3, 4, 5]

a.concat([4, 5], [6, 7]);
// Result: [1, 2, 3, 4, 5, 6, 7]

a.concat(4, [5, [6, 7]]);
// Result: [1, 2, 3, 4, 5, [6, 7]]
```

- **Merging arrays**: If any of the arguments is an array, the array’s elements are merged (not the array itself).

#### Example with strings:

```js
const myGirls = ["Cel", "Lon"];
const myBoys = ["Em", "Lin"];
const myPets = ["cat", "Dog"];

const myChildren = myGirls.concat(myBoys);
// Result: ["Cel", "Lon", "Em", "Lin"]

const family = myGirls.concat(myBoys, myPets);
// Result: ["Cel", "Lon", "Em", "Lin", "cat", "Dog"]

const myKids = myGirls.concat("daisy");
// Result: ["Cel", "Lon", "daisy"]
```

#### Important Notes:

- `concat()` **does not modify** the original array but returns a new one.
- While `concat()` is convenient, it can be inefficient because it creates a new array. If you often modify arrays, consider using `push()` or `splice()`.


____

### Array.prototype.flat(depth)

The `flat()` method creates a new array from a multidimensional array with all sub-array elements concatenated to a specified depth.

In **ES2019**, `flat()` flattens nested arrays to a specified depth and returns a new array.

```js
arr.flat(depth);
```

- **depth** (optional): The number of levels to flatten the array. The default is `1`.

```js
const myArray = [ [1,2], [3,4], [5,6] ];

const newArray = myArray.flat();
// Result: [1, 2, 3, 4, 5, 6]
```

**Flattening behavior:**
- If you pass no argument to `flat()`, it flattens the array by one level.
- If you pass a number to `flat(depth)`, it flattens the array by the specified number of levels.

```js
[1, [2, 3]].flat()
// Result: [1, 2, 3]

[1, [2, [3]] ].flat()
// Result: [1, 2, [3]]

let a = [1, [2, [3, [4]]]];
a.flat(1)
// Result: [1, 2, [3, [4]]]
a.flat(2)
// Result: [1, 2, 3, [4]]
a.flat(3)
// Result: [1, 2, 3, 4]
a.flat(4)
// Result: [1, 2, 3, 4]
```

---

### Array.prototype.flatMap(fn)

The `flatMap()` method first maps each element using the provided function and then flattens the result into a new array.

```js
arr.flatMap(fn);
```

- **fn**: A function that is called on each element in the array.

```js
const myArray = [1, 2, 3, 4, 5, 6];

const newArray = myArray.flatMap(x => [x, x * 10]);
// Result: [1, 10, 2, 20, 3, 30, 4, 40, 5, 50, 6, 60]
```

- `flatMap()` works like `map()` but flattens the resulting array automatically, which makes it more efficient than calling `map()` followed by `flat()`.

#### Example with strings:

```js
let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
// Result: ["hello", "world", "the", "definitive", "guide"]
```

#### Example with empty arrays:

```js
// Map non-negative numbers to their square roots
[-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x))
// Result: [1, 2**0.5]
```

---

[arr.flat(depth)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)   /   [arr.flatMap(fn)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)


---

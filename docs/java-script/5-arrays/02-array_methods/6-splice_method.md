---
title: "06 - splice() Method"
description: ""
summary: ""
date: 2024-11-09T17:09:53+05:30
lastmod: 2024-11-09T17:09:53+05:30
draft: false
weight: 444
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The `splice()` method is a versatile tool used for inserting, deleting, or replacing elements in an array. It modifies the array's `length` property and adjusts the positions of elements to higher or lower index when necessary.

```js
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

- **start**: The index where the modification begins.
- **deleteCount**: The number of elements to be removed (optional).
- **elem1, ..., elemN**: The elements to be inserted (optional).

This method returns an array of the removed elements.

---

### Deleting Elements Using splice()

`splice()` can be used to remove elements from an array.

The first argument to `splice()` specifies the array position at which the insertion and/or deletion is to begin.

The second argument specifies the number of elements that should be deleted (spliced out of) the array.

```js
let a = [1, 2, 3, 4, 5, 6, 7, 8];
a.splice(4);
// Output: [5, 6, 7, 8]; a is now [1, 2, 3, 4]

a.splice(1, 2);
// Output: [2,3]; a is now [1, 4]

a.splice(1, 1);
// Output: [4]; a is now [1]
```

#### Deleting and Returning Removed Items

```js
let arr = ["I", "study", "JS"];

arr.splice(1, 1);  // From index 1, remove 1 element

console.log(arr); // ["I", "JS"]
```

```js
let arr = ["I", "study", "JS", "right", "Now"];
let deletedItems = arr.splice(0, 2);

console.log(arr); 
// ["JS", "right", "Now"]

console.log(deletedItems); 
// ["I", "study"]
```

---

### Deletion and Insertion Using splice()

You can remove elements and insert new elements in a single operation.

```js
let a = [1, 2, 3, 4, 5];

a.splice(2, 2, "newElement");
// a becomes [1, 2, "newElement", 5]
```
This removes 2 elements at index 2 and replaces them with `"newElement"`.

#### Deletion and Replacement:

```js
let arr = ["I", "study", "JS", "right", "Now"];
arr.splice(0, 3, "Let's", "Dance");

console.log(arr); // ["Let's", "Dance", "right", "Now"]
```
Remove 3 elements starting from index 0 and replace them with `"Let's"` and `"Dance"`

---

### Inserting Elements Without Deleting

You can insert elements without removing any.

```js
let arr = ["I", "study", "JS", "right", "Now"];
arr.splice(2, 0, "right", "Now");

console.log(arr); // ["I", "study", "JS", "right", "Now"]
```
Starting from index 2, delete nothing, and insert `"right"` and `"Now"`

```js
let a = [1, 2, 3, 4, 5];
a.splice(2, 0, "a", "b");
// a becomes [1, 2, "a", "b", 3, 4, 5]

a.splice(2, 2, [1, 2], 3);
// a becomes [1, 2, [1, 2], 3, 3, 4, 5]
```


---

### Using Negative Indexes

Negative indexes allow you to count from the end of the array.

The first parameter defines the index where the new element should be added (spliced). The second parameter defines how many elements should be removed. The rest of the parameters define the new elements to be added.

```js
let arr = [1, 2, 5];
arr.splice(-1, 0, 3, 4);

console.log(arr); // [1, 2, 3, 4, 5]
```

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Insert "Lemon" and "Kiwi" at index 2 without removing any elements
fruits.splice(2, 0, "Lemon", "Kiwi");
// fruits becomes ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
```

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Remove 2 elements starting from index 2 and add "Lemon" and "Kiwi"
fruits.splice(2, 2, "Lemon", "Kiwi");
// fruits becomes ["Banana", "Orange", "Lemon", "Kiwi"]
// Removed items: ["Apple", "Mango"]
```

---

### Finding a Range In-Place Using splice()

You can use `splice()` to remove elements outside a specific range. Here's an example of how to iterate through an array and delete elements that don't fall within a specified range.

```js
function findInRange(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;  // Adjust the index to avoid skipping elements
    }
  }
}

let arr = [5, 3, 8, 1];
findInRange(arr, 1, 4);
console.log(arr); // Output: [3, 1]
```

Alternatively, you can loop in reverse order to prevent index adjustments:

```js
function findRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

let arr = [5, 3, 8, 1];
findRangeInPlace(arr, 1, 4);
console.log(arr); // Output: [3, 1]
```

---

## toSpliced() Method

The `toSpliced()` method is a non-destructive version of `splice()`. It creates a new array with the modifications, leaving the original array unchanged.

```js
arr.toSpliced(start[, deleteCount, elem1, ..., elemN])
```

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const spliced = fruits.toSpliced(2, 0, "Lemon", "Kiwi");

console.log(fruits);  // Original array remains unchanged

console.log(spliced); 
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
```

---


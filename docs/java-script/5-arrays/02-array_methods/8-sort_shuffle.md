---
title: "08 - sort() and shuffle()"
description: ""
summary: ""
date: 2024-11-09T17:09:53+05:30
lastmod: 2024-11-09T17:09:53+05:30
draft: false
weight: 448
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Index of the methods covered:

* **`sort()`** - Sorts an array in place. It can be customized using a comparison function for sorting in numerical or lexicographical order.

* **`shuffle()`** - Randomly shuffles the elements of an array using the Fisher-Yates algorithm.

---

**Arrays** inherit properties from `Array.prototype`, which defines a rich set of array manipulation methods. Most of these methods are **generic**, meaning they work not only for true arrays but for any "array-like object."


### sort() Method

The `sort()` method in JavaScript is used to sort the elements of an array **in place**, meaning it modifies the original array and also returns the sorted array. By default, it converts array elements to strings and sorts them lexicographically (alphabetically or numerically in string order).

```js
let arr = [1, 2, 15];
arr.sort();
alert(arr); // "1, 15, 2"
```

- In this example, `sort()` sorts the numbers as strings. Thus, `1` comes first, followed by `15`, and finally `2`.

[sort(fn)](https://javascript.info/array-methods#sort-fn)   /  [arr.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

#### Sorting with a Custom Comparator

To sort the array numerically or in any specific order, we can pass a **comparison function** to `sort()`. The function should return:

- A **negative number** if `a` should appear before `b`.
- A **positive number** if `a` should appear after `b`.
- **Zero** if `a` and `b` are considered equal.

Sorting numbers in **ascending order**:

```js
let arr = [1, 2, 15];
arr.sort(function(a, b) {
	return a - b;
});
alert(arr);  // [1, 2, 15]
```

**Shorter Version (Using Arrow Function)**
```js
arr.sort((a, b) => a - b);  // Sorts in ascending order
alert(arr); // [1, 2, 15]
```

For **descending order**:

```js
arr.sort((a, b) => b - a);  // Sorts in descending order
alert(arr); // [15, 2, 1]
```

---

### Sorting Strings

When sorting an array of strings, JavaScript compares them lexicographically (alphabetical order):

```js
let arr = ['Banana', 'Apple', 'Orange'];
arr.sort();
alert(arr); // ["Apple", "Banana", "Orange"]
```

To sort strings in **reverse order**, swap `a` and `b` in the comparison function:

```js
arr.sort((a, b) => b.localeCompare(a));
alert(arr); // ["Orange", "Banana", "Apple"]
```

---

### Copying and Sorting an Array

To sort an array while keeping the original array intact, make a copy of the array using `slice()` or the spread operator, and then apply `sort()`:

```js
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = arr.slice().sort();
alert(sorted); // ["CSS", "HTML", "JavaScript"]
alert(arr); // ["HTML", "JavaScript", "CSS"] (original array remains unchanged)
```

Or using the spread operator:
```js
let sorted = [...arr].sort();
```

---

### Sorting Objects by a Property (e.g., Age)

If you have an array of objects and want to sort by a specific property (e.g., `age`), pass a comparison function that compares the property values:

```js
let john = {id: "john", name: "John Smith", age: 25};
let ann = {id: "ann", name: "Ann Smith", age: 29};
let pete = {id: "pete", name: "Pete Peterson", age: 30};

let arr = [john, pete, ann];
arr.sort((a, b) => a.age - b.age);  // Sort by age in ascending order
alert(arr[0].name);  // John Smith
alert(arr[1].name);  // Ann Smith
alert(arr[2].name);  // Pete Peterson
```

To sort in **descending order**, reverse the comparison:

```js
arr.sort((a, b) => b.age - a.age);  // Sort by age in descending order
```

---
### Shuffle an Array

Shuffling is a way to randomly reorder the elements of an array. While you could use `sort()` with a random comparator to shuffle the array, this is not a perfect solution because `sort()` is not intended for randomness and can lead to non-uniform distributions.

```js
let arr = [1, 2, 3];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5); // Random comparator
}

shuffle(arr);
alert(arr);  // Randomly shuffled, e.g., [2, 1, 3]
```

To shuffle an array randomly, use the **Fisher-Yates shuffle algorithm** (more reliable than using `sort()` with `Math.random()`):
[Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

```js
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1)); // Random index between 0 and i
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);  // Array shuffled, e.g., [2, 1, 3]
```

---

#### Simulating Random Distribution

If you want to test how well the Fisher-Yates shuffle distributes the results, you can run the shuffle multiple times and count the results:

```js
let count = { '123': 0, '132': 0, '213': 0, '231': 0, '321': 0, '312': 0 };

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

// 123: 166693
// 132: 166647
// 213: 166628
// 231: 167517
// 312: 166199
// 321: 166316
```

This will give you an idea of how evenly the shuffle distributes the different possible permutations of the array `[1, 2, 3]`.

____

- **`sort()`** sorts arrays **in place**, modifying the original array.
- By default, `sort()` converts array elements to strings and sorts lexicographically.
- To **sort numerically**, pass a comparison function to `sort()`.
- **Sort objects by properties** (like age) using a custom comparator.
- **Shuffling** is better done using the **Fisher-Yates shuffle** for randomness rather than relying on `sort()` with `Math.random()`.

---

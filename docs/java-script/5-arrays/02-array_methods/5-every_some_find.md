---
title: "05 - every() some() and Searching Methods"
description: ""
summary: ""
date: 2024-11-09T17:09:41+05:30
lastmod: 2024-11-09T17:09:41+05:30
draft: false
weight: 442
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Index of methods covered here :

- **`every()`**: Returns `true` if all elements in the array satisfy the provided testing function.
- **`some()`**: Returns `true` if at least one element in the array satisfies the provided testing function.

**Methods for searching and finding Elements**
- **`find()`**: Returns the first element in an array that satisfies the provided testing function.
- **`findIndex()`**: Returns the index of the first element that satisfies the provided testing function.
- **`findLastIndex()`**: Returns the index of the last element in an array that satisfies the provided testing function, searching from right to left.
- **`indexOf()`** - Searches for an item in an array and returns the index of its first occurrence.
* **`lastIndexOf()`** - Searches for an item in an array and returns the index of its last occurrence.
* **`includes()`** - Checks if an item exists in the array, returning `true` or `false`.

____

Both `every()` and `some()` methods are predicates that apply a testing function (`fn`) to all elements of the array.

#### every()

The `every()` method tests whether **all** elements in the array pass the provided testing function.

```js
let result = arr.every(function(item) {
    return condition; // Return true if all elements meet the condition
});
```

- Returns `true` if **all** elements satisfy the condition.
- Returns `false` as soon as **one** element does not meet the condition.

#### some()

The `some()` method tests whether **at least one** element in the array passes the provided testing function.

```js
let result = arr.some(function(item) {
    return condition; // Return true if at least one element meets the condition
});
```

- Returns `true` if at least one element satisfies the condition.
- Returns `false` if no element meets the condition.

---

```js
let a = [1, 2, 3, 4, 5];

console.log(a.every(x => x < 10)); // true: all values are < 10
console.log(a.every(x => x % 2 === 0)); // false: not all values are even

console.log(a.some(x => x % 2 === 0)); // true: a has some even numbers
console.log(a.some(isNaN)); // false: a has no non-numbers
```

- **`every()`** is like the mathematical “for all” quantifier (∀). It returns `true` if all elements satisfy the condition.
- **`some()`** is like the mathematical “there exists” quantifier (∃). It returns `true` if there exists at least one element satisfying the condition.


[arr.some(fn)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) / [arr.every(fn)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) .


____
## Methods for searching and finding Elements


### find()

The `find()` method returns the **first element** in the array that satisfies the provided testing function.

```js
let foundItem = arr.find(function(item) {
	return condition; // Return true if found
});
```

 - Returns the first element that matches the condition.    
 - If no element is found, it returns `undefined`.

---

### findIndex()

The `findIndex()` method returns the **index** of the first element in the array that satisfies the provided testing function.

```js
let foundIndex = arr.findIndex(function(item) {
    return condition; // Return true if found
});
```

- Returns the index of the first element that matches the condition.
- If no element is found, it returns `-1`.

---

Both `find()` and `findIndex()` iterate through the array and stop as soon as they find a matching element. If no element matches, `find()` returns `undefined` and `findIndex()` returns `-1`.

```js
let a = [1, 2, 3, 4, 5];

console.log(a.findIndex(x => x === 3)); // 2: value 3 appears at index 2
console.log(a.findIndex(x => x < 0));  // -1: no negative numbers in the array
console.log(a.find(x => x % 5 === 0)); // 5: a multiple of 5
console.log(a.find(x => x % 7 === 0)); // undefined: no multiples of 7 in the array
```

---

In an array of objects, you can use these methods to find an object based on a specific condition.

```js
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "John" }
];

let user = users.find(item => item.id == 1);
console.log(user.name); // "John"

console.log(users.findIndex(user => user.name == "John")); // 0

console.log(users.findLastIndex(user => user.name == "John")); // 2
```

- **`findLastIndex()`** searches from right to left.

---

Arrays implement `indexOf()`, `lastIndexOf()`, and `includes()` methods that are similar to the same-named methods for strings.

### indexOf(), lastIndexOf(), includes()

These methods are typically used with only one argument: the item to be found.

#### indexOf()

```js
arr.indexOf(item, from)
```

- `indexOf` searches through the array for `item`, compares the argument to the array elements using the strict equality (`===`) operator, starting from index `from` to the end, and returns the **index** at which the value was found. If not found, it returns `-1`.

#### lastIndexOf()
`lastIndexOf` searches from the end (right to left).

```js
console.log([1, 2, 3, 2, 1].indexOf(2));    // 1

console.log([1, 2, 3, 2, 1].lastIndexOf(2));  // 3
```

#### includes()

```js
arr.includes(item, from)
```

`includes()` searches through the array for `item`, starting from index `from` to the end, and returns **true** if found. It handles `NaN` properly.

```js
const arr = [NaN];

alert(arr.indexOf(NaN));  // -1
alert(arr.includes(NaN));  // true
```

___

```js
function findall(a, x) {
	let results = [],
// The array of indexes we'll return
		len = a.length,
// The length of the array to be searched
		pos = 0;
// The position to search from

while(pos < len) {
// While more elements to search...
		pos = a.indexOf(x, pos); // Search
	if (pos === -1) break;
// If nothing found, we're done.
	results.push(pos);
// Otherwise, store index in array
	pos = pos + 1;
// And start next search at next element
}
return results;
// Return array of indexes
}
```


---

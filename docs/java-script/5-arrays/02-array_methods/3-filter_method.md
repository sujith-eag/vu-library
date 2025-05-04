---
title: "03 - filter() Method"
description: ""
summary: ""
date: 2024-11-09T17:09:14+05:30
lastmod: 2024-11-09T17:09:14+05:30
draft: false
weight: 438
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Brief Summary of Methods for Array Manipulation in this Page

##### Adding Elements
`push()` : Adds one or more elements to the **end** of an array and returns the new length.
`unshift()` : Adds one or more elements to the **beginning** of an array, shifting existing elements.
```js
arr.push("newElement");

arr.unshift("newElement");
```

##### **Removing Elements**
`pop()`: Removes the **last** element of an array and returns it.
`shift()`: Removes the **first** element of an array and returns it, shifting all other elements down by one index.
```js
arr.pop();

arr.shift();
```

##### Deleting Elements
`delete` operator : Removes an element from an array but does **not** update the `length` or shift elements.
```js
delete arr[2];
```


____

### Adding Elements with 'push()' and 'unshift()'

Elements can be added to an array by simply assigning values to new indices, or  using methods like `push()` to add one or more elements to the end of an array. 

The `push()` method also returns the new length of the array.

```js
let a = [];
// Start with an empty array

a.push("zero");
// Add a value at the end. a = ["zero"]

a.push("one", "two"); 
// Add two more values. a = ["zero", "one", "two"]
```

```js
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push("Banana");

console.log(sequence);  
// [1, 2, 3, 4, Banana]

let length = sequence.push("Mango");  
// 6
```

You can use the `unshift()` method to insert an element at the **beginning** of an array, shifting existing elements to higher indices.

```js
a.unshift("start"); 
// Adds "start" to the beginning of the array
```

The `push()` method does not flatten an array passed to it. However, to push all the elements from one array onto another array, you can use the spread operator to flatten it explicitly:

```js
a.push(...values);
```

---

### Removing Elements with 'pop()' and 'shift()'

The `pop()` method removes the last element of the array and returns it, reducing the length of the array by 1.

```js
let lastItem = a.pop(); // Removes and returns the last element
```

The `shift()` method removes the first element of the array and returns it, reducing the length by 1 and shifting all remaining elements down by one index.

```js
let firstItem = a.shift(); // Removes and returns the first element
```

```js
const fruits = ["Banana", "Orange", "Mango", "Kiwi"];

fruits.shift();   // removes Banana
let fruit = fruits.shift();  // Orange

fruits.unshift("Lemon"); // Adds lemon at the front
let num = fruits.unshift("Lemon"); // 5
```

When passing multiple arguments to `unshift()`, they are inserted all at once, meaning they will be in a different order than if you inserted them one at a time:

```js
let a = [];
a.unshift(1)
a.unshift(2)
// a == [2, 1]

a = [];
a.unshift(1, 2)
// a == [1, 2]
```

---

### Stack and Queue with push(), pop(), shift(), and unshift()

The `push()` and `pop()` methods allows to work with arrays as if they were stacks.
- `push()` appends one or more new elements to the end of an array and returns the new length.
- `pop()` removes the last element and returns it.

```js
let stack = [];
stack.push(1, 2);   // [1, 2]
stack.pop();        // returns 2
stack.push(3);      // [1, 3]
stack.pop();        // returns 3
stack.push([4, 5]); // [1, [4, 5]]
stack.pop();        // returns [4, 5]
stack.pop();        // returns 1
// stack == []
```

queue data structure can be implemented using `push()` to add elements at the end of an array and `shift()` to remove them from the start of the array.

```js
let q = [];
q.push(1, 2);    // [1, 2]
q.shift();       // returns 1
q.push(3);       // [2, 3]
q.shift();       // returns 2
q.shift();       // returns 3
// q == []
```

**To-Do List : Managing a Queue or Stack**

```js
let todoList = [];

function remember(task) {
  todoList.push(task); // Adds task to the end of the list
}

function getTask() {
  return todoList.shift(); // Removes the first task
}

function rememberUrgently(task) {
  todoList.unshift(task); // Adds task to the front of the list
}
```

---

#### Function for Adding Entries to an Array

If you want to simplify adding entries to an array of objects, you can use a function:

```js
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running"], false);
addEntry(["work", "ice cream", "lasagna"], false);
addEntry(["weekend", "cycling", "peanuts"], true);
```

This is a shorthand for creating an object with properties named `events` and `squirrel`. Since the property names match the argument names, JavaScript will automatically assign them.

---

## Deleting Array Elements

Delete can be done with `delete` operator, similar to deleting object properties.

However, note that using `delete` on an array element **does not** affect the `length` property, and it does **not** shift the remaining elements to fill the gap. This results in a sparse array.

```js
let a = [1, 2, 3];

delete a[2];
// a now has no element at index 2

console.log(2 in a);  // => false: no element at index 2
console.log(a.length);  // => 3: Length is unaffected by delete
```

---


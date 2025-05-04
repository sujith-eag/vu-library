---
title: "04 - reduce() Method"
description: ""
summary: ""
date: 2024-11-09T17:09:29+05:30
lastmod: 2024-11-09T17:09:29+05:30
draft: false
weight: 440
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The `reduce()` method is one of the most powerful and flexible array methods in JavaScript. It allows to **reduce** an array to a single value by iterating over all elements and applying a function that combines each element with an accumulator (the result of previous calculations). 

The `reduce()` method executes a **reducer function** on each element in the array (from left to right) to reduce it to a single value.

- `reduce()` and `reduceRight()` methods are used to combine the elements of an array.
- The result is typically a single value, such as a sum, product, or transformed object.

```js
let result = arr.reduce(function(accumulator, currentItem, index, array) {
    // Return the updated accumulator
}, initialValue);
```

- **`accumulator`**: The cumulative value returned after each iteration.
- **`currentItem`**: The current array element being processed.
- **`index`** (optional): The index of the current item.
- **`array`** (optional): The array `reduce()` was called on.
- **`initialValue`**: The starting value for the accumulator (optional, defaults to the first element of the array).

---

#### Example 1: Summing an Array

To sum all the elements in an array, you can use `reduce()`:

```js
const arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15
```

- **`sum`** starts at `0` (the `initialValue`).
- **`current`** is each element in the array.
- The final result after all iterations is `15`.

If we omit the `initialValue`, the sum begins with the first element:

```js
let result = arr.reduce((sum, current) => sum + current);
console.log(result); // 15
```

---

#### Example 2: Multiplying All Elements

The `reduce()` method can also perform a cumulative calculation, such as multiplying all the numbers in an array:

```js
const arr = [1, 2, 3, 4, 5];
const product = arr.reduce((total, currentItem) => total * currentItem, 1);
console.log(product); // 120
```

- **`total`** starts at `1` (multiplying by `1` has no effect).
- Each element is multiplied by the accumulator (`total`), and the result accumulates through the iterations.

---

#### Example 3: Creating a Keyed Object from an Array

You can use `reduce()` to transform an array of objects into an object with a custom key. For example, turning an array of users into an object where the `id` is the key:

```js
let users = [
	{id: "john", name: "John Smith", age: 20},
	{id: "ann", name: "Ann Smith", age: 24},
	{id: "pete", name: "Pete Peterson", age: 31}
];

function groupById(array) {
	return array.reduce((obj, value) => {
		obj[value.id] = value;
		return obj;
  }, {});
}

let usersById = groupById(users);
console.log(usersById);
```
```
// {
//   "john": {id: "john", name: "John Smith", age: 20},
//   "ann": {id: "ann", name: "Ann Smith", age: 24},
//   "pete": {id: "pete", name: "Pete Peterson", age: 31}
// }
```

- **`obj`** is the accumulator, starting as an empty object `{}`.
- Each user's `id` is used as the key, and the user object is assigned to that key.

---

#### Example 4: Getting the Average Age of Users

We can also use `reduce()` to calculate the average of a property (e.g., `age`) in an array of objects:

```js
let john = {id: "john", name: "John Smith", age: 25};
let ann = {id: "ann", name: "Ann Smith", age: 29};
let pete = {id: "pete", name: "Pete Peterson", age: 30};

let arr = [john, ann, pete];

function getAverageAge(users) {
	return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}

console.log(getAverageAge(arr)); // 28
```

- **`acc`** starts at `0` and accumulates the sum of the `age` property.
- After the loop, the total sum is divided by the length of the array to compute the average.

---

#### Example 5: Sum of Tripled Even Numbers

You can chain `reduce()` with other array methods like `map()` and `filter()` to perform more complex transformations. For example, summing the tripled values of all even numbers:

```js
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)     // filter out even numbers
    .map((num) => num * 3)               // multiply all by 3
    .reduce((acc, curr) => acc + curr);  // get total sum
}

console.log(sumOfTripledEvens([1, 2, 3, 4, 5]));  // 30
```

- **`filter()`**: Selects only even numbers (`[2, 4]`).
- **`map()`**: Triples each even number (`[6, 12]`).
- **`reduce()`**: Sums the tripled values (`6 + 12 = 30`).

---

### reduceRight() Method

`reduceRight()` works similarly to `reduce()`, but it processes the array from right to left. It’s useful when the direction of processing matters.

```js
// Compute 2^(3^4). Exponentiation has right-to-left precedence
let a = [2, 3, 4];
let result = a.reduceRight((acc, val) => Math.pow(val, acc));
console.log(result); // 2.4178516392292583e+24
```

- In this example, the array is processed from right to left, so the exponentiation operation follows right-to-left precedence.

```js
const arr = [1, 2, 3, 4, 5];
const result = arr.reduceRight((acc, current) => acc - current, 0);
console.log(result);  // 3
```

- **`reduceRight()`** starts from the last element and processes the array in reverse.

---

